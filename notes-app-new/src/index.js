import { getNotes, createNote, sortNotes } from './notes'
import { getFitlers, setFilters } from './filters'
import { renderNotes } from './views'

let notes = getNotes()
const filter = getFitlers()

renderNotes()

document.querySelector('#filter-note').addEventListener('input', (e) => {
  setFilters({
    searchText: e.target.value,
  })
  renderNotes()
})

document.querySelector('#add-note').addEventListener('submit', (e) => {
  e.preventDefault()
  const id = createNote()
  location.assign(`/edit.html#${id}`)
})

document.querySelector('#sortBy').addEventListener('change', (e) => {
  setFilters({
    sortBy: e.target.value,
  })
  sortNotes()
  renderNotes()
})

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)

    renderNotes()
  }
})
