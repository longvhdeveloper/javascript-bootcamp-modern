let todos = getSavedTodos()

// const ps = document.querySelectorAll("p")

// ps.forEach((item) => {
// 	const text = item.textContent
// 	if (text.includes("the")) {
// 		item.remove()
// 	}
// })

const body = document.querySelector('body')
const todoObj = document.querySelector('#todos')
const filter = {
  searchText: '',
  hideComplete: false,
}

renderTodo(todos, filter)

document.querySelector('#filter-todo').addEventListener('input', (e) => {
  filter.searchText = e.target.value
  renderTodo(todos, filter)
})

document.querySelector('#add-todo-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const text = e.target.elements.newTodo.value
  createNewTodo(todos, text)
  e.target.elements.newTodo.value = ''
})

document.querySelector('#hideComplete').addEventListener('change', (e) => {
  filter.hideComplete = e.target.checked
  renderTodo(todos, filter)
})
