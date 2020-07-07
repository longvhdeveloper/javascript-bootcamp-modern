// Global scope (convertFahrenheitToCelsius
// local scope (fahrenheit. celsius)
// local scope (isFreezing)
let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9)
  if (celsius <= 0) {
    let isFreezing = true
  }
  return celsius
}

console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))
