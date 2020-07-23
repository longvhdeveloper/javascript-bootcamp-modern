// Named export
// Default export

console.log('util.js')

const add = (a = 0, b = 0) => {
  return a + b
}

const name = 'Long'

const square = (x = 0) => {
  return x * x
}

console.log('debug my code')

export { add, name, square as default }
