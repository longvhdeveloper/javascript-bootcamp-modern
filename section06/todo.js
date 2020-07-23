const todos = ['Learn Funix', 'Coding', 'Play badminton', 'Walk in park', 'Go to restaurant']

// todos.splice(2, 1)

// console.log(todos)

// todos.push('Play game')

// console.log(todos)

// todos.shift()

// console.log(`You have ${todos.length} todos`)
// console.log(todos)
// //console.log(`Todo: ${todos[0]}`)
// //console.log(`Todo: ${todos[todos.length - 1]}`)

// todos.forEach((todo, index) => {
//   console.log(`${index + 1}. ${todo}`)
// })
// console.log('-'.repeat(20))
// for (let i = 0; i < todos.length; i++) {
//   console.log(`${i + 1}. ${todos[i]}`)
// }

const todoObjects = []
todos.forEach((todo, index) => {
  const completed = index % 2 === 0
  todoObjects.push({
    text: todo,
    completed,
  })
})

const removeItem = (todoObjects, text) => {
  const index = todoObjects.findIndex((todo) => {
    return todo.text.toLowerCase() === text
  })

  if (index > -1) {
    todoObjects.splice(index, 1)
  }
}

removeItem(todoObjects, 'Coding')
console.log(todoObjects)

removeItem(todoObjects, 'Test')
console.log(todoObjects)

const getThingsTodo = (todos) => {
  return todos.filter((todo) => !todo.completed)
}

console.log(getThingsTodo(todoObjects))

const sortTodos = (todos) => {
  return todos.sort((todo1, todo2) => {
    const isComplete1 = todo1.completed ? 1 : 0
    const isComplete2 = todo2.completed ? 1 : 0
    if (isComplete1 < isComplete2) {
      return -1
    } else if (isComplete1 > isComplete2) {
      return 1
    } else {
      return 0
    }
  })
}

console.log(sortTodos(todoObjects))
