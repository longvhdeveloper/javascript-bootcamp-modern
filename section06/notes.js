const notes = [
  //{},
  {
    title: 'My next trip',
    body: 'I would like to go to Spain',
  },
  {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better',
  },
  {
    title: 'Office modification',
    body: 'Get a new seat',
  },
]

//console.log(notes.pop())
//notes.push('My new note')
//
//console.log(notes.shift())
//notes.unshift('My first note')
//notes.splice(1, 1)
// notes.forEach((item, index) => {
//   console.log(item, index)
// })

console.log(notes.length)
console.log(notes)

// for (let i = 0; i < notes.length; i++) {
//   console.log(`Counting ... ${i + 1}`)
//   console.log(notes[i])
// }

// console.log(notes.indexOf('note 2'))

// console.log({} === {})
// let someObject = {}
// let otherObject = someObject
// console.log(someObject === otherObject)
// const findNote = (notes, noteTitle) => {
//   const index = notes.findIndex((note) => {
//     return note.title === noteTitle
//   })
//   return index > -1 ? notes[index] : undefined
// }

const findNote = (notes, noteTitle) => {
  return notes.find((note) => {
    return note.title === noteTitle
  })
}

const note = findNote(notes, 'Office modification')

console.log(note)

const index = notes.findIndex((note, index) => {
  return note.title === 'Habbits to work on'
})

console.log(index)

const findNotes = (notes, query) => {
  return notes.filter((note) => {
    const isMatchTitle = note.title.toLowerCase().includes(query.toLowerCase())
    const isMatchBody = note.body.toLowerCase().includes(query.toLowerCase())
    return isMatchTitle || isMatchBody
  })
}

console.log(findNotes(notes, 'to'))

// sort array
const sortNotes = (notes) => {
  return notes.sort((note1, note2) => {
    if (note1.title.toLowerCase() < note2.title.toLowerCase()) {
      return -1
    } else if (note1.title.toLowerCase() > note2.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

console.log(sortNotes(notes))
