import moment from 'moment'
import { sortNotes, getNotes } from './notes'
import { getFitlers } from './filters'

const renderNotes = () => {
  const filter = getFitlers()
  sortNotes(filter.sortBy)
  const notes = getNotes()
  const filterNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filter.searchText.toLowerCase())
  })

  const notesObj = document.querySelector('#notes')
  notesObj.innerHTML = ''

  if (filterNotes.length === 0) {
    const emptyMessage = document.createElement('p')
    emptyMessage.textContent = 'No notes to show'
    emptyMessage.classList.add('empty-message')
    notesObj?.appendChild(emptyMessage)
  } else {
    filterNotes.forEach((note) => {
      const noteEl = generateNoteDOM(note)
      notesObj?.appendChild(noteEl)
    })
  }
}

const generateNoteDOM = (note) => {
  const noteEl = document.createElement('a')
  const textEl = document.createElement('p')
  const statusEl = document.createElement('p')

  if (!note.title) {
    note.title = 'Unnamed'
  }

  textEl.textContent = note.title
  textEl.classList.add('list-item__title')

  noteEl.appendChild(textEl)

  noteEl.setAttribute('href', `/edit.html#${note.id}`)

  statusEl.textContent = `Last edited ${generateLastEdited(note.updatedAt)}`
  statusEl.classList.add('list-item__subtitle')
  noteEl.classList.add('list-item')

  noteEl.appendChild(statusEl)

  return noteEl
}

const generateLastEdited = (timestamp) => {
  return moment.unix(timestamp / 1000).fromNow()
}

export { renderNotes, generateLastEdited }
