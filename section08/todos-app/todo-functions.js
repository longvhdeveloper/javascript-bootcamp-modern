const getSavedTodos = () => {
  let todos = []
  // get data from local storage
  const todoJSON = localStorage.getItem('todo')
  if (todoJSON) {
    todos = JSON.parse(todoJSON)
  }
  return todos
}

const renderTodo = (todos, filter) => {
  generateSummaryDOM()
  todoFilters = todos.filter((todo) => {
    let conditions = todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
    if (filter.hideComplete) {
      conditions = conditions && !todo.completed
    }
    return conditions
  })

  todoObj.innerHTML = ''

  todoFilters.forEach((todo) => {
    const li = generateTodoDOM(todo)
    todoObj.appendChild(li)
  })
}

const createNewTodo = (todos, text) => {
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
  const div = document.createElement('div')
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

  div.appendChild(checkbox)
  div.appendChild(span)
  div.appendChild(button)

  return div
}

const generateSummaryDOM = () => {
  let leftTodo = todos.filter((todo) => !todo.completed).length
  const leftTodoP = document.querySelector('#todo-left')
  leftTodoP.textContent = `You have ${leftTodo} todo left.`
}
