const STORAGE_KEY = 'taskflow.todos';
const FILTERS = {
  all: () => true,
  active: (task) => !task.completed,
  completed: (task) => task.completed,
};

const todoForm = document.querySelector('#todoForm');
const taskInput = document.querySelector('#taskInput');
const taskError = document.querySelector('#taskError');
const todoList = document.querySelector('#todoList');
const emptyState = document.querySelector('#emptyState');
const taskCount = document.querySelector('#taskCount');
const remainingCount = document.querySelector('#remainingCount');
const clearCompletedBtn = document.querySelector('#clearCompletedBtn');
const clearAllBtn = document.querySelector('#clearAllBtn');
const confirmModal = document.querySelector('#confirmModal');
const cancelDeleteBtn = document.querySelector('#cancelDelete');
const confirmDeleteBtn = document.querySelector('#confirmDelete');
const filterButtons = document.querySelectorAll('.filter-btn');

let tasks = loadTasks();
let currentFilter = 'all';

function loadTasks() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];

  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function formatCount(count, labelSingular, labelPlural) {
  return `${count} ${count <= 1 ? labelSingular : labelPlural}`;
}

function updateStats() {
  const completed = tasks.filter((task) => task.completed).length;
  const remaining = tasks.length - completed;

  taskCount.textContent = formatCount(tasks.length, 'tâche', 'tâches');
  remainingCount.textContent = formatCount(remaining, 'restante', 'restantes');
}

function renderTasks() {
  const filteredTasks = tasks.filter(FILTERS[currentFilter]);

  todoList.innerHTML = '';

  filteredTasks.forEach((task) => {
    const item = document.createElement('li');
    item.className = `todo-item ${task.completed ? 'completed' : ''}`;
    item.dataset.id = String(task.id);

    item.innerHTML = `
      <div class="todo-main">
        <button class="check-btn" type="button" aria-label="Marquer comme terminé"></button>
        <span class="todo-text">${escapeHtml(task.title)}</span>
      </div>
      <div class="todo-actions">
        <button class="delete-btn" type="button" aria-label="Supprimer la tâche">Supprimer</button>
      </div>
    `;

    todoList.appendChild(item);
  });

  emptyState.classList.toggle('visible', filteredTasks.length === 0);
  updateStats();
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function validateTaskText(value) {
  const trimmed = value.trim();

  if (!trimmed) {
    return 'Renseigne une tâche avant de valider.';
  }

  const lettersOnly = trimmed.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ]/g, '');

  if (lettersOnly.length < 2) {
    return 'La tâche doit contenir au moins deux lettres.';
  }

  const normalized = lettersOnly
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  const vowels = normalized.match(/[aeiouy]/g) || [];
  const consonants = normalized.match(/[bcdfghjklmnpqrstvwxyz]/g) || [];
  const hasFrenchLetters = /[àâäéèêëîïôöùûüç]/i.test(trimmed);

  if (vowels.length === 0 && !hasFrenchLetters) {
    return 'La tâche semble écrite au hasard. Essaie une phrase en français.';
  }

  if (vowels.length < 2 && consonants.length > normalized.length * 0.75) {
    return 'Merci d’écrire une tâche lisible en français.';
  }

  return '';
}

function setTaskError(message) {
  taskError.textContent = message;
  taskInput.setAttribute('aria-invalid', message ? 'true' : 'false');
}

function addTask(title) {
  const cleanTitle = title.trim();
  const validationMessage = validateTaskText(cleanTitle);

  if (validationMessage) {
    setTaskError(validationMessage);
    taskInput.focus();
    return;
  }

  setTaskError('');

  tasks.unshift({
    id: Date.now(),
    title: cleanTitle,
    completed: false,
  });

  saveTasks();
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task,
  );

  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
}

function clearCompleted() {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTasks();
}

function clearAll() {
  confirmModal.classList.remove('hidden');
}

function closeModal() {
  confirmModal.classList.add('hidden');
}

function confirmClearAll() {
  tasks = [];
  saveTasks();
  renderTasks();
  closeModal();
}

function setFilter(filter) {
  currentFilter = filter;

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === filter;
    button.classList.toggle('active', isActive);
  });

  renderTasks();
}

taskInput.addEventListener('input', () => {
  if (!taskInput.value.trim()) {
    setTaskError('');
    return;
  }

  const validationMessage = validateTaskText(taskInput.value);
  setTaskError(validationMessage);
});

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask(taskInput.value);

  if (!taskError.textContent) {
    taskInput.value = '';
    taskInput.focus();
  }
});

todoList.addEventListener('click', (event) => {
  const target = event.target;
  const item = target.closest('.todo-item');

  if (!item) return;

  const taskId = Number(item.dataset.id);

  if (target.classList.contains('check-btn')) {
    toggleTask(taskId);
    return;
  }

  if (target.classList.contains('delete-btn')) {
    deleteTask(taskId);
  }
});

clearCompletedBtn.addEventListener('click', () => {
  clearCompleted();
});

clearAllBtn.addEventListener('click', () => {
  clearAll();
});

cancelDeleteBtn.addEventListener('click', () => {
  closeModal();
});

confirmDeleteBtn.addEventListener('click', () => {
  confirmClearAll();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !confirmModal.classList.contains('hidden')) {
    closeModal();
  }
});

confirmModal.addEventListener('click', (event) => {
  if (event.target === confirmModal) {
    closeModal();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => setFilter(button.dataset.filter));
});

renderTasks();
