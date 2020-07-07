//const myAge = 27
//
//let message = myAge >= 18 ? 'You can vote' : 'You can not vote'
//
//console.log(message)

const myAge = 27
const showPage = () => {
  console.log('Show the page')
}

const showErrorPage = () => {
  console.log('Show the error page')
}

myAge >= 21 ? showPage() : showErrorPage()

const team = ['Tyler', 'Peter', 'Marry', 'Anna', 'Tim']
let message = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team'
console.log(message)
