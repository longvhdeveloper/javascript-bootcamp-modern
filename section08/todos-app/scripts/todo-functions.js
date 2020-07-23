'use strict'

const getSavedTodos = () => {
  try {
    // let todos = []
    // get data from local storage
    const todoJSON = localStorage.getItem('todo')
    //if (todoJSON) {
    //  todos = JSON.parse(todoJSON)
    //}
    //return todos
    return todoJSON ? JSON.parse(todoJSON) : []
  } catch (e) {
    return []
  }
}

const renderTodo = (todos, filter) => {
  generateSummaryDOM()
  const todoFilters = todos.filter((todo) => {
    let conditions = todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
    if (filter.hideComplete) {
      conditions = conditions && !todo.completed
    }
    return conditions
  })

  todoObj.innerHTML = ''
  if (todoFilters.length === 0) {
    const emptyMessEl = document.createElement('p')
    emptyMessEl.textContent = 'No to-dos to show'
    emptyMessEl.classList.add('empty-message')
    todoObj?.appendChild(emptyMessEl)
  } else {
    todoFilters.forEach((todo) => {
      const li = generateTodoDOM(todo)
      todoObj.appendChild(li)
    })
  }
}

const createNewTodo = (todos, text) => {
  text = text.trim()
  if (text) {
    todos.push({
      id: uuidv4(),
      text,
      completed: false,
    })
    saveTodo(todos)
    renderTodo(todos, filter)
  }
}

const saveTodo = (todos) => {
  localStorage.setItem('todo', JSON.stringify(todos))
}

const removeTodo = (id) => {
  const idx = todos.findIndex((todo) => {
    return todo.id === id
  })
  if (idx > -1) {
    todos.splice(idx, 1)
    saveTodo(todos)
  }
}

const toggleTodo = (id, completed) => {
  const idx = todos.findIndex((todo) => {
    return todo.id === id
  })
  if (idx > -1) {
    todos[idx].completed = completed
    saveTodo(todos)
  }
}

const generateTodoDOM = (todo) => {
  const label = document.createElement('label')
  const containerEl = document.createElement('div')
  const span = document.createElement('span')
  const checkbox = document.createElement('input')
  const button = document.createElement('button')

  checkbox.setAttribute('type', 'checkbox')
  if (todo.completed) {
    checkbox.setAttribute('checked', true)
  }

  checkbox.addEventListener('click', (e) => {
    toggleTodo(todo.id, e.target.checked)
    renderTodo(todos, filter)
  })

  span.textContent = todo.text

  button.textContent = 'Remove'
  button.addEventListener('click', (e) => {
    removeTodo(todo.id)
    renderTodo(todos, filter)
  })

  button.classList.add('button', 'button--text')

  label.classList.add('list-item')

  containerEl.classList.add('list-item__container')

  containerEl.appendChild(checkbox)
  containerEl.appendChild(span)

  label.appendChild(containerEl)
  label.appendChild(button)

  return label
}

const generateSummaryDOM = () => {
  let leftTodo = todos.filter((todo) => !todo.completed).length
  const leftTodoP = document.querySelector('#todo-left')
  leftTodoP?.classList.add('list-title')
  leftTodoP.textContent = `You have ${leftTodo} ${pluralize(leftTodo, 'todo')} left.`
}
const pluralize = (number, text) => {
  return number === 1 ? text : `${text}s`
}
