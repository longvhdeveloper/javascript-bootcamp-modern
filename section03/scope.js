// Lexical scope (static scope)
// Global scope - Defined outside of all code blocks
// Local scope - Defined inside a code block

let name = 'Andrew'

if (true) {
  let name = 'Mike'
  if (true) {
    name = 'Jen'
    console.log(name)
  }
}

if (true) {
  console.log(name)
}
