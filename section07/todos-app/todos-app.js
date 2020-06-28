const todos = [
	{
		text: "Order cat food",
		completed: false,
	},
	{
		text: "Clean kitchen",
		completed: true,
	},
	{
		text: "Buy food",
		completed: true,
	},
	{
		text: "Do work",
		completed: false,
	},
	{
		text: "Exercise",
		completed: true,
	},
]

// const ps = document.querySelectorAll("p")

// ps.forEach((item) => {
// 	const text = item.textContent
// 	if (text.includes("the")) {
// 		item.remove()
// 	}
// })

const body = document.querySelector("body")
const todoObj = document.querySelector("#todos")
const filter = {
	searchText: "",
	hideComplete: false,
}

const renderTodo = (todos, filter) => {
	let leftTodo = todos.filter((todo) => !todo.completed).length
	const leftTodoP = document.querySelector("#todo-left")
	leftTodoP.textContent = `You have ${leftTodo} todo left.`

	todoFilters = todos.filter((todo) => {
		let conditions = todo.text
			.toLowerCase()
			.includes(filter.searchText.toLowerCase())
		if (filter.hideComplete) {
			conditions = conditions && !todo.completed
		}
		return conditions
	})

	todoObj.innerHTML = ""

	todoFilters.forEach((todo) => {
		const li = document.createElement("li")
		li.textContent = todo.text
		todoObj.appendChild(li)
	})
}
renderTodo(todos, filter)

document.querySelector("#filter-todo").addEventListener("input", (e) => {
	filter.searchText = e.target.value
	renderTodo(todos, filter)
})

document.querySelector("#add-todo-form").addEventListener("submit", (e) => {
	e.preventDefault()
	todos.push({
		text: e.target.elements.newTodo.value,
		completed: false,
	})

	e.target.elements.newTodo.value = ""

	renderTodo(todos, filter)
})

document.querySelector("#hideComplete").addEventListener("change", (e) => {
	filter.hideComplete = e.target.checked
	renderTodo(todos, filter)
})
