// Primitive value: string, number, boolean, null, undefined

// product --> Object.prototype --> null
//const product = {
//  name: 'Influence',
//}
//
//Object.prototype.newMethod = () => 'This is new method'
//
//// hasOwnProperty
//console.log(product.hasOwnProperty('hasOwnProperty'))
//console.log(product.newMethod())
//console.log(product)

// //Array: myArray -> Array.prototype -> Object.prototype -> null
// const team = ['Luke', 'Mandison']
// console.log(team)

// // Function: myFunc -> Function.prototype -> Object.prototype -> null
// const getScore = () => 1
// console.log(getScore)

// // String: myString -> String.prototype -> Object.prototype -> null
// const product = 'Computer'
// console.log(product)

// const otherProduct = new String('Other product')
// console.log(otherProduct)

// Number: myNumber -> Number.prototype -> Object.prototype -> null
// Boolean: myBoolean -> Boolean.prototype -> Object.prototype -> null

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

// getPuzzle((error, puzzle) => {
//   if (error) {
//     console.log(`Error: ${error}`)
//   } else {
//     console.log(`Puzzle is ${puzzle}`)
//   }
// })

// getPuzzle(2)
//   .then((puzzle) => {
//     console.log(puzzle)
//   })
//   .catch((err) => {
//     console.error(err)
//   })

// getCountryDetails('Vn')
//   .then((name) => {
//     console.log(name)
//   })
//   .catch((err) => {
//     console.error(err)
//   })

// Making an HTTP request
// const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.response)
//     console.log(data)
//   } else if (e.target.readyState === 4) {
//     console.log('And error has token place')
//   }
// })

// request.addEventListener('readystatechange', (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const countries = JSON.parse(e.target.response)

//     const myCountryCode = 'VN'
//     const myCountry = countries.find((country) => {
//       return country.alpha2Code === myCountryCode
//     })

//     console.debug(myCountry.name)
//   } else if (e.target.readyState === 4) {
//     console.log('And error has token place')
//   }
// })

// request.open('GET', 'https://restcountries.eu/rest/v2/all')
// request.send()

// fetch('http://puzzle.mead.io/puzzle', {})
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error('Unable to fetch puzzle')
//     }
//   })
//   .then((data) => {
//     console.log(data.puzzle)
//   })
//   .catch((err) => console.error(err))

// getLocation()
//   .then((data) => {
//     console.log(`City: ${data.city}`)
//     console.log(`Region: ${data.region}`)
//     return getCountryDetails(data.country.toLowerCase())
//   })
//   .then((country) => {
//     console.log(`Country: ${country}`)
//   })
//   .catch((err) => console.error(err))

// getCurrentCountry()
//   .then((country) => {
//     console.log(`Country : ${country.name}`)
//   })
//   .catch((err) => console.log(err))
