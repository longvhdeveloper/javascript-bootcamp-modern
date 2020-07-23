import { renderTodos } from './views'
import { createNewTodo } from './todos'
import { setFilter } from './filters'

renderTodos()

document.querySelector('#filter-todo').addEventListener('input', (e) => {
  setFilter({
    searchText: e.target.value,
  })
  renderTodo()
})

document.querySelector('#add-todo-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const text = e.target.elements.newTodo.value
  createNewTodo(text)
  e.target.elements.newTodo.value = ''
  renderTodos()
})

document.querySelector('#hideComplete').addEventListener('change', (e) => {
  setFilter({
    hideComplete: e.target.checked,
  })
  renderTodos()
})
