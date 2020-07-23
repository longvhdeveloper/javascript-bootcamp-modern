let name = '   Long Vo'

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123password'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// Challenge
const isValidPassword = (password) => {
  if (password.length < 8) {
    return false
  }
  if (password.includes('password')) {
    return false
  }
  return true
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123#@!$$%'))
console.log(isValidPassword('abc123password'))
