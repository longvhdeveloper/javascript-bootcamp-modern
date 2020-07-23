import Hangman from './hangman'
import getPuzzle from './requests'
import { v4 as uuidv4 } from 'uuid'
import validator from 'validator'

console.log(uuidv4())

console.log(validator.isEmail('vlong@yahoo-corp.jp'))
console.log(validator.isEmail('vlong@my'))

const puzzleEl = document.getElementById('puzzle')
const statusEl = document.getElementById('guesses')

let hangman1 = {}

const startGame = async () => {
  const puzzle = await getPuzzle(2)
  hangman1 = new Hangman(puzzle, 5)
  render()
}
startGame()

const render = () => {
  displayPuzzle()
  displayStatus()
}

const displayPuzzle = () => {
  const puzzle = hangman1.puzzle
  puzzleEl.innerHTML = ''

  let html = ''

  for (const c of puzzle) {
    html += `<span>${c}</span>`
  }

  puzzleEl.innerHTML = html
}

const displayStatus = () => {
  statusEl.textContent = hangman1.statusMessage
}

window.addEventListener('keypress', (e) => {
  if (hangman1.status !== 'playing') {
    e.preventDefault()
    return
  }

  const guess = String.fromCharCode(e.charCode)
  hangman1.makeGuess(guess)
  render()
})

document.querySelector('#reset')?.addEventListener('click', startGame)
