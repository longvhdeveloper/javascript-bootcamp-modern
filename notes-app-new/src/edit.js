import moment from 'moment'
import { getNotes, removeNote, updateNote } from './notes'
import { generateLastEdited } from './views'

const id = location.hash.substring(1)

let notes = getNotes()

const note = notes.find((note) => note.id === id)

if (!note) {
  location.assign('/index.html')
}

const lastEditedEl = document.querySelector('#last-edited')

document.querySelector('#note-title').value = note.title
document.querySelector('#note-body').value = note.body
lastEditedEl.textContent = `Last edited ${moment.unix(note.updatedAt / 1000).fromNow()}`
document.querySelector('#note-title').addEventListener('input', (e) => {
  updateNote(note.id, {
    title: e.target.value,
  })

  lastEditedEl.textContent = `Last edited ${generateLastEdited(note.updatedAt)}`
})

document.querySelector('#note-body').addEventListener('input', (e) => {
  updateNote(note.id, {
    body: e.target.value,
  })

  lastEditedEl.textContent = `Last edited ${generateLastEdited(note.updatedAt)}`
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
    lastEditedEl.textContent = `Last edited ${generateLastEdited(notes[idx].updatedAt)}`
  }
})
