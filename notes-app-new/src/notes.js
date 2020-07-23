'use strict'

import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import { getFitlers } from './filters'

let notes = []

const getSavedNotes = () => {
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

// Expose notes from module
const getNotes = () => notes

const createNote = () => {
  const now = moment()
  const id = uuidv4()

  notes.push({
    id,
    title: '',
    body: '',
    createdAt: now.valueOf(),
    updatedAt: now.valueOf(),
  })

  saveNotes()

  return id
}

const saveNotes = () => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

const removeNote = (id) => {
  const idx = notes.findIndex((note) => note.id === id)
  notes.splice(idx, 1)
  saveNotes(notes)
}

const sortNotes = () => {
  const sortBy = getFitlers().sortBy
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

const updateNote = (id, { title, body }) => {
  const note = notes.find((note) => note.id === id)

  if (!note) {
    return
  }

  if (typeof title === 'string') note.title = title

  if (typeof body === 'string') note.body = body

  note.updatedAt = moment().valueOf()

  saveNotes()
}

notes = getSavedNotes()

export { getNotes, createNote, removeNote, sortNotes, updateNote }
