'use strict'
const getSavedNotes = () => {
  let notes = []
  // get notes from local storage
  const notesJson = localStorage.getItem('notes')
  try {
    if (notesJson) {
      notes = JSON.parse(notesJson)
    }
  } catch (e) {
    return []
  }

  return notes
}

const sortNotes = (notes, sortBy) => {
  if (sortBy === 'byEdited') {
    notes.sort((note1, note2) => {
      if (note1.updatedAt > note2.updatedAt) {
        return -1
      } else if (note1.updatedAt < note2.updatedAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byCreated') {
    notes.sort((note1, note2) => {
      if (note1.createdAt > note2.createdAt) {
        return -1
      } else if (note1.createdAt < note2.createdAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byAlphabet') {
    notes.sort((note1, note2) => {
      if (note1.title.toLowerCase() < note2.title.toLowerCase()) {
        return -1
      } else if (note1.title.toLowerCase() > note2.title.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    })
  }
}

const renderNotes = (notes, filter) => {
  sortNotes(notes, filter.sortBy)
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

const removeNote = (id) => {
  const idx = notes.findIndex((note) => note.id === id)
  notes.splice(idx, 1)
  saveNote(notes)
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

const saveNote = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes))
}
