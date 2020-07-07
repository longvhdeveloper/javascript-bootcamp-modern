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
  filterNotes.forEach((note) => {
    const li = generateNoteDOM(note)
    notesObj.appendChild(li)
  })
}

const removeNote = (id) => {
  const idx = notes.findIndex((note) => note.id === id)
  notes.splice(idx, 1)
  saveNote(notes)
}

const generateNoteDOM = (note) => {
  const li = document.createElement('li')
  const span = document.createElement('span')
  const link = document.createElement('a')
  const button = document.createElement('button')

  button.textContent = 'Remove'

  button.addEventListener('click', (e) => {
    removeNote(note.id)
    renderNotes(notes, filter)
  })

  link.setAttribute('href', `/edit.html#${note.id}`)

  if (!note.title) {
    note.title = 'Unnamed'
  }
  link.textContent = note.title

  span.append(link)

  li.appendChild(span)
  li.appendChild(button)

  return li
}

const saveNote = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes))
}
