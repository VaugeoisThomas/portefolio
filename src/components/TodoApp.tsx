import { useEffect, useMemo, useState } from 'react'

type Todo = {
  id: number
  title: string
  completed: boolean
}

type Filter = 'all' | 'active' | 'completed'

const STORAGE_KEY = 'taskflow.todos'

const FILTERS: Record<Filter, (task: Todo) => boolean> = {
  all: () => true,
  active: (task) => !task.completed,
  completed: (task) => task.completed,
}

function validateTaskText(value: string) {
  const trimmed = value.trim()

  if (!trimmed) {
    return 'Renseigne une tâche avant de valider.'
  }

  const lettersOnly = trimmed.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ]/g, '')

  if (lettersOnly.length < 2) {
    return 'La tâche doit contenir au moins deux lettres.'
  }

  const normalized = lettersOnly
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  const vowels = normalized.match(/[aeiouy]/g) || []
  const consonants = normalized.match(/[bcdfghjklmnpqrstvwxyz]/g) || []
  const hasFrenchLetters = /[àâäéèêëîïôöùûüç]/i.test(trimmed)

  if (vowels.length === 0 && !hasFrenchLetters) {
    return 'La tâche semble écrite au hasard. Essaie une phrase en français.'
  }

  if (vowels.length < 2 && consonants.length > normalized.length * 0.75) {
    return 'Merci d’écrire une tâche lisible en français.'
  }

  return ''
}

function formatCount(count: number, labelSingular: string, labelPlural: string) {
  return `${count} ${count <= 1 ? labelSingular : labelPlural}`
}

export default function TodoApp() {
  const [tasks, setTasks] = useState<Todo[]>(() => {
    if (typeof window === 'undefined') return []

    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) return []

    try {
      return JSON.parse(stored) as Todo[]
    } catch {
      return []
    }
  })

  const [currentFilter, setCurrentFilter] = useState<Filter>('all')
  const [taskInput, setTaskInput] = useState('')
  const [taskError, setTaskError] = useState('')
  const [showConfirm, setShowConfirm] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const filteredTasks = useMemo(() => tasks.filter(FILTERS[currentFilter]), [tasks, currentFilter])

  const completedTasks = tasks.filter((task) => task.completed).length
  const remainingTasks = tasks.length - completedTasks

  const handleInputChange = (value: string) => {
    setTaskInput(value)

    if (!value.trim()) {
      setTaskError('')
      return
    }

    setTaskError(validateTaskText(value))
  }

  const addTask = () => {
    const cleanTitle = taskInput.trim()
    const validationMessage = validateTaskText(cleanTitle)

    if (validationMessage) {
      setTaskError(validationMessage)
      return
    }

    setTasks((previous) => [{ id: Date.now(), title: cleanTitle, completed: false }, ...previous])
    setTaskInput('')
    setTaskError('')
  }

  const toggleTask = (id: number) => {
    setTasks((previous) => previous.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id: number) => {
    setTasks((previous) => previous.filter((task) => task.id !== id))
  }

  const clearCompleted = () => {
    setTasks((previous) => previous.filter((task) => !task.completed))
  }

  const confirmClearAll = () => {
    setTasks([])
    setShowConfirm(false)
  }

  return (
    <div className="todo-demo mini-app-card">
      <div className="topbar todo-topbar">
        <div className="title-wrap">
          <p className="eyebrow">Productivité</p>
          <h1>TaskFlow</h1>
        </div>

        <div className="header-actions">
          <button type="button" className="ghost-button" onClick={clearCompleted}>
            ✓
          </button>
          <button type="button" className="ghost-button" onClick={() => setShowConfirm(true)}>
            🗑
          </button>
        </div>
      </div>

      <p className="project-description">Une todo list inspirée des pratiques de gestion de tâches et d’organisation quotidienne.</p>

      <div className="card">
        <div className="todo-form">
          <input
            value={taskInput}
            onChange={(event) => handleInputChange(event.target.value)}
            aria-invalid={Boolean(taskError)}
            placeholder="Ajouter une tâche..."
          />
          <button type="button" className="primary-button" onClick={addTask}>
            +
          </button>
        </div>

        <div className="task-error">{taskError}</div>

        <div className="filter-row" aria-label="Filtres des tâches">
          {(['all', 'active', 'completed'] as Filter[]).map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-btn ${currentFilter === filter ? 'active' : ''}`}
              onClick={() => setCurrentFilter(filter)}
            >
              {filter === 'all' ? 'Toutes' : filter === 'active' ? 'Actives' : 'Terminées'}
            </button>
          ))}
        </div>

        <div className="stats-panel">
          <span>{formatCount(tasks.length, 'tâche', 'tâches')}</span>
          <span>{formatCount(remainingTasks, 'restante', 'restantes')}</span>
        </div>

        <ul className="todo-list">
          {filteredTasks.length === 0 ? (
            <li className="empty-state">Aucune tâche pour ce filtre.</li>
          ) : (
            filteredTasks.map((task) => (
              <li key={task.id} className={`todo-item ${task.completed ? 'completed' : ''}`}>
                <div className="todo-main">
                  <button
                    type="button"
                    className="check-btn"
                    aria-label="Marquer comme terminé"
                    onClick={() => toggleTask(task.id)}
                  />
                  <span className="todo-text">{task.title}</span>
                </div>
                <button type="button" className="delete-btn" onClick={() => deleteTask(task.id)}>
                  Supprimer
                </button>
              </li>
            ))
          )}
        </ul>
      </div>

      {showConfirm && (
        <div className="confirm-modal" onClick={() => setShowConfirm(false)}>
          <div className="confirm-dialog" onClick={(event) => event.stopPropagation()}>
            <h3>Tout effacer ?</h3>
            <p>Cette action supprimera toutes les tâches de la liste.</p>
            <div className="confirm-actions">
              <button type="button" className="ghost-button" onClick={() => setShowConfirm(false)}>
                Annuler
              </button>
              <button type="button" className="primary-button compact" onClick={confirmClearAll}>
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
