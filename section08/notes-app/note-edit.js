'use strict'
const id = location.hash.substring(1)
let notes = getSavedNotes()

const now = moment()

let idx = notes.findIndex((note) => note.id === id)

if (idx < 0) {
  location.assign('/index.html')
}

let note = notes[idx]

const lastEditedEl = document.querySelector('#last-edited')

document.querySelector('#note-title').value = note.title
document.querySelector('#note-body').value = note.body
lastEditedEl.textContent = `Last edited ${moment.unix(note.updatedAt / 1000).fromNow()}`

document.querySelector('#note-title').addEventListener('input', (e) => {
  notes[idx].title = e.target.value
  notes[idx].updatedAt = now.valueOf()
  lastEditedEl.textContent = `Last edited ${moment.unix(notes[idx].updatedAt / 1000).fromNow()}`
  saveNote(notes)
})

document.querySelector('#note-body').addEventListener('input', (e) => {
  notes[idx].body = e.target.value
  notes[idx].updatedAt = now.valueOf()
  lastEditedEl.textContent = `Last edited ${moment.unix(notes[idx].updatedAt / 1000).fromNow()}`
  saveNote(notes)
})

document.querySelector('#remove-note').addEventListener('click', (e) => {
  removeNote(note.id)
  location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)

    idx = notes.findIndex((note) => note.id === id)

    if (idx < 0) {
      location.assign('/index.html')
    }

    note = notes[idx]

    document.querySelector('#note-title').value = note.title
    document.querySelector('#note-body').value = note.body
    lastEditedEl.textContent = `Last edited ${moment.unix(note.updatedAt / 1000).fromNow()}`
  }
})
