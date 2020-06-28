const notes = [
	{
		title: "my next trip",
		body: "I would like to go to Spain",
	},
	{
		title: "Habbits to work on",
		body: "Exercise, Eating a bit better",
	},
	{
		title: "Office modification",
		body: "Get a new seat",
	},
]

// DOM - Document Object Model

// query and remove
// const p = document.querySelector("p")
// p.remove()

// query all and remove
// const ps = document.querySelectorAll("p")
// ps.forEach((item) => {
// 	//item.remove()
// 	item.textContent = "******"
// })

// // Add element
// const newElement = document.createElement("p")
// newElement.textContent = "This is new element from Javascript"
// document.querySelector("body").appendChild(newElement)

const filter = {
	searchText: "",
}

const renderNotes = (notes, filter) => {
	const filterNotes = notes.filter((note) => {
		return note.title.toLowerCase().includes(filter.searchText.toLowerCase())
	})

	const notesObj = document.querySelector("#notes")
	notesObj.innerHTML = ""
	filterNotes.forEach((note) => {
		const li = document.createElement("li")
		li.textContent = note.title
		notesObj.appendChild(li)
	})
}

renderNotes(notes, filter)

// document.querySelector("#add-note").addEventListener("click", (e) => {
// 	console.log("Add Note")
// 	console.log(e.target)
// })

// document.querySelector("#remove-all").addEventListener("click", (e) => {
// 	document.querySelectorAll(".note").forEach((item) => {
// 		item.remove()
// 	})
// })

document.querySelector("#filter-note").addEventListener("input", (e) => {
	filter.searchText = e.target.value
	renderNotes(notes, filter)
})

document.querySelector("#add-note").addEventListener("submit", (e) => {
	e.preventDefault()
	console.log(e.target.elements.newNote.value)
	e.target.elements.newNote.value = ""
})

document.querySelector("#for-fun").addEventListener("change", (e) => {
	console.log(e.target.checked)
})

document.querySelector("#sortBy").addEventListener("change", (e) => {
	console.log(e.target.value)
})
