import { v4 as uuidv4 } from 'uuid'

let todos = []

const getSavedTodos = () => {
  try {
    // get data from local storage
    const todoJSON = localStorage.getItem('todo')
    return todoJSON ? JSON.parse(todoJSON) : []
  } catch (e) {
    return []
  }
}

todos = getSavedTodos()

const getTodos = () => todos

const createNewTodo = (text) => {
  text = text.trim()
  if (text) {
    todos.push({
      id: uuidv4(),
      text,
      completed: false,
    })
    saveTodos()
  }
}

const saveTodos = () => {
  localStorage.setItem('todo', JSON.stringify(todos))
}

const removeTodo = (id) => {
  const idx = todos.findIndex((todo) => {
    return todo.id === id
  })
  if (idx > -1) {
    todos.splice(idx, 1)
    saveTodos()
  }
}

const toggleTodo = (id, completed) => {
  const idx = todos.findIndex((todo) => {
    return todo.id === id
  })
  if (idx > -1) {
    todos[idx].completed = completed
    saveTodos()
  }
}

export { getTodos, createNewTodo, toggleTodo, removeTodo }
