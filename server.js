import express from 'express';
import cors from 'cors';
import fs from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const app = express();
const port = 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const resultsFile = path.join(__dirname, 'quiz-results.json');
const usersFile = path.join(__dirname, 'quiz-users.json');
const authFile = path.join(__dirname, 'quiz-auth.json');
const LEVELS = ['debutant', 'intermediaire', 'avance'];

app.disable('x-powered-by');
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

function readAuthUsers() {
  ensureDataFile(authFile, []);
  const raw = fs.readFileSync(authFile, 'utf8');
  return JSON.parse(raw || '[]');
}

function writeAuthUsers(users) {
  fs.writeFileSync(authFile, JSON.stringify(users, null, 2));
}

function ensureDataFile(filePath, defaultValue = []) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(defaultValue, null, 2));
  }
}

function readJson(filePath) {
  ensureDataFile(filePath, []);
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw || '[]');
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2));
}

function buildUser(username) {
  const normalized = String(username).trim();
  return {
    username: normalized,
    currentLevel: 'debutant',
    unlockedLevels: ['debutant'],
    bestScore: 0,
    totalAttempts: 0,
    lastPlayedAt: null,
    history: [],
    updatedAt: new Date().toISOString(),
  };
}

function getOrCreateUser(username) {
  const users = readJson(usersFile);
  const normalizedUsername = String(username).trim();

  if (!normalizedUsername) {
    return null;
  }

  let user = users.find((item) => item.username === normalizedUsername);

  if (!user) {
    user = buildUser(normalizedUsername);
    users.push(user);
    writeJson(usersFile, users);
  }

  return user;
}

function updateUserProgress(username, version, score, total) {
  const user = getOrCreateUser(username);
  if (!user) {
    return null;
  }

  const ratio = total ? score / total : 0;
  let nextLevel = user.currentLevel || 'debutant';

  if (version === 'debutant' && ratio >= 0.8) {
    nextLevel = 'intermediaire';
  }

  if (version === 'intermediaire' && ratio >= 0.8) {
    nextLevel = 'avance';
  }

  if (version === 'avance' && ratio >= 0.8) {
    nextLevel = 'avance';
  }

  const currentIndex = LEVELS.indexOf(user.currentLevel || 'debutant');
  const nextIndex = Math.max(currentIndex, LEVELS.indexOf(nextLevel));

  user.currentLevel = LEVELS[nextIndex] || 'debutant';
  user.unlockedLevels = LEVELS.slice(0, Math.max(nextIndex + 1, 1));
  user.bestScore = Math.max(user.bestScore || 0, score);
  user.totalAttempts = (user.totalAttempts || 0) + 1;
  user.lastPlayedAt = new Date().toISOString();
  user.history = [
    {
      version,
      score,
      total,
      createdAt: user.lastPlayedAt,
    },
    ...(user.history || []).slice(0, 4),
  ];
  user.updatedAt = new Date().toISOString();

  const users = readJson(usersFile);
  const index = users.findIndex((item) => item.username === user.username);

  if (index >= 0) {
    users[index] = user;
    writeJson(usersFile, users);
  }

  return user;
}

function readResults() {
  ensureDataFile(resultsFile, []);
  const raw = fs.readFileSync(resultsFile, 'utf8');
  return JSON.parse(raw || '[]');
}

function writeResults(results) {
  fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
}

app.post('/api/auth/register', (req, res) => {
  const { name, email, password } = req.body || {};
  const safeName = String(name || '').trim();
  const safeEmail = String(email || '').trim().toLowerCase();
  const safePassword = String(password || '').trim();

  if (!safeName || !safeEmail || !safePassword) {
    return res.status(400).json({ message: 'Nom, email et mot de passe sont requis.' });
  }

  const users = readAuthUsers();
  const existingUser = users.find((user) => user.email === safeEmail);

  if (existingUser) {
    return res.status(409).json({ message: 'Un compte existe déjà pour cet email.' });
  }

  const user = {
    id: randomUUID(),
    name: safeName,
    email: safeEmail,
    password: safePassword,
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  writeAuthUsers(users);

  res.status(201).json({
    message: 'Compte créé avec succès.',
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body || {};
  const safeEmail = String(email || '').trim().toLowerCase();
  const safePassword = String(password || '').trim();

  if (!safeEmail || !safePassword) {
    return res.status(400).json({ message: 'Email et mot de passe requis.' });
  }

  const users = readAuthUsers();
  const user = users.find((item) => item.email === safeEmail && item.password === safePassword);

  if (!user) {
    return res.status(401).json({ message: 'Identifiants incorrects.' });
  }

  res.json({
    message: 'Connexion réussie.',
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
});

app.get('/api/quiz/results', (req, res) => {
  const results = readResults();
  res.json(results);
});

app.get('/api/quiz/users/:username', (req, res) => {
  const user = getOrCreateUser(req.params.username);

  if (!user) {
    return res.status(400).json({ message: 'Nom d’utilisateur invalide.' });
  }

  res.json({
    username: user.username,
    currentLevel: user.currentLevel || 'debutant',
    unlockedLevels: user.unlockedLevels || ['debutant'],
    bestScore: user.bestScore || 0,
    totalAttempts: user.totalAttempts || 0,
    lastPlayedAt: user.lastPlayedAt || null,
    history: Array.isArray(user.history) ? user.history : [],
  });
});

app.post('/api/quiz/results', (req, res) => {
  const { username, category, version, score, total, mistakes, summary } = req.body || {};

  if (!username || !category || !version || typeof score !== 'number' || typeof total !== 'number') {
    return res.status(400).json({ message: 'Données incomplètes pour enregistrer le résultat.' });
  }

  const results = readResults();
  const entry = {
    id: randomUUID(),
    username: String(username).trim(),
    category,
    version,
    score,
    total,
    mistakes: Array.isArray(mistakes) ? mistakes : [],
    summary: summary || '',
    createdAt: new Date().toISOString(),
  };

  results.push(entry);
  writeResults(results);

  const user = updateUserProgress(entry.username, version, score, total);

  res.status(201).json({
    message: 'Résultat enregistré.',
    entry,
    user,
  });
});

app.listen(port, () => {
  console.log(`Quiz API running on http://localhost:${port}`);
});
