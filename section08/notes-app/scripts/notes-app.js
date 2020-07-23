'use strict'
let notes = getSavedNotes()
const now = moment()

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
  searchText: '',
  sortBy: 'byEdited',
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

document.querySelector('#filter-note').addEventListener('input', (e) => {
  filter.searchText = e.target.value
  renderNotes(notes, filter)
})

document.querySelector('#add-note').addEventListener('submit', (e) => {
  e.preventDefault()
  const noteTitle = e.target.elements.newNote.value

  const id = uuidv4()

  notes.push({
    id,
    title: noteTitle,
    body: '',
    createdAt: now.valueOf(),
    updatedAt: now.valueOf(),
  })

  saveNote(notes)

  e.target.elements.newNote.value = ''
  renderNotes(notes, filter)
  location.assign(`/edit.html#${id}`)
})

// document.querySelector('#for-fun').addEventListener('change', (e) => {
//   console.log(e.target.checked)
// })

document.querySelector('#sortBy').addEventListener('change', (e) => {
  filter.sortBy = e.target.value
  renderNotes(notes, filter)
})

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)

    renderNotes(notes, filter)
  }
})

// // Unix Epoch
// const now = new Date()
// const timeStamp = now.getTime()

// const myDate = new Date(timeStamp)
// console.log(myDate.getFullYear())

// // console.log(`Year: ${now.getFullYear()}`)
// // console.log(`Month: ${now.getMonth() + 1}`)
// // console.log(`Day of month: ${now.getDate()}`)
// // console.log(`Hour: ${now.getHours()}`)
// // console.log(`Minute: ${now.getMinutes()}`)
// // console.log(`Second: ${now.getSeconds()}`)

// const date1 = new Date('July 21 1989 10:12:11')
// const date2 = new Date('July 28 1989 14:27:18')

// console.log(date1.getTime())
// console.log(date2.getTime())

// if (date1.getTime() < date2.getTime()) {
//   console.log(date1.toString())
// } else {
//   console.log(date2.toString())
// }
