import { getTodos } from './todos'
import { getFilter } from './filters'
import { removeTodo, toggleTodo } from './todos'

const todoObj = document.querySelector('#todos')

const renderTodos = () => {
  const todos = getTodos()
  const { searchText, hideComplete } = getFilter()

  generateSummaryDOM(todos)

  const todoFilters = todos.filter((todo) => {
    let conditions = todo.text.toLowerCase().includes(searchText.toLowerCase())
    if (hideComplete) {
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
    renderTodos()
  })

  span.textContent = todo.text

  button.textContent = 'Remove'
  button.addEventListener('click', (e) => {
    removeTodo(todo.id)
    renderTodos()
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

const generateSummaryDOM = (todos) => {
  let leftTodo = todos.filter((todo) => !todo.completed).length
  const leftTodoP = document.querySelector('#todo-left')
  leftTodoP?.classList.add('list-title')
  leftTodoP.textContent = `You have ${leftTodo} ${pluralize(leftTodo, 'todo')} left.`
}
const pluralize = (number, text) => {
  return number === 1 ? text : `${text}s`
}

export { renderTodos }
