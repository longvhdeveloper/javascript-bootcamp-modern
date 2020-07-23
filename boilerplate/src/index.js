// import otherSquare, { add, name } from './util'
// import myScream from './scream'

// console.log('index.js')
// console.log(add(10, 5))
// console.log(name)

// console.log(myScream('hello webpack'))
// console.log(otherSquare(10))

// const team = {
//   name: 'Liberty',
//   coach: 'Casey Penn',
//   players: ['Marge', 'Aiden', 'Herbert', 'Sherry'],
// }

// const printTeam = (teamName, coach, ...players) => {
//   console.log(`Team: ${teamName}`)
//   console.log(`Coach: ${coach}`)
//   console.log(`Player: ${players.join(', ')}`)
// }

// const printTeamSpread = (teamName, coach, firstPlayer, secondPlayer) => {
//   console.log(`Team: ${teamName}`)
//   console.log(`Coach: ${coach}`)
//   //console.log(`Player: ${players.join(', ')}`)
//   console.log(firstPlayer, secondPlayer)
// }

// //printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')
// printTeamSpread(team.name, team.coach, ...team.players)

// const cities = ['Ho Chi Minh', 'Ha Noi', 'Da Nang']

// // clone array
// const anotherCities = ['Can Tho', ...cities]
// anotherCities[1] = 'Hai Phong'

// console.log(anotherCities, cities)

// let house = {
//   bedrooms: 2,
//   bathrooms: 1.5,
//   yearBuild: 2017,
// }

// let newHouse = {
//   basement: true,
//   ...house,
//   bedrooms: 4,
// }
// newHouse.yearBuild = 2020

// console.log(house)
// console.log(newHouse)

// const me = {
//   name: 'Long Vo',
//   age: 31,
// }

// const myLocation = {
//   city: 'Ho Chi Minh',
//   country: 'Viet Nam',
// }

// const profile = {
//   ...me,
//   ...myLocation,
// }

// console.log(profile)

const todo = {
  id: '12-ah-ded',
  text: 'Clean the house',
  completed: false,
}

const printTodo = ({ text, completed }) => {
  console.log(`${text}: ${completed}`)
}

printTodo(todo)

const { text: title, completed, details = 'default', ...others } = todo
console.log(title, completed, details)
console.log(others)

const age = [65, 0, 13, 21]

const [age1, age2, age3, age4, lastAge = 0] = age
console.log(age1, age2, age3, age4, lastAge)
