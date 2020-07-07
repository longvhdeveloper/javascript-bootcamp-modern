// Multiple arguments
let add = function (a, b, c) {
  return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
  return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

const calculateTips = (total = 0, tipPercent = 0.2) => {
  return total * tipPercent
}

console.log(calculateTips())
console.log(calculateTips(undefined, 0.3))
console.log(calculateTips(100))

let total = 100
let percentTip = 0.4
console.log(`A ${percentTip * 100}% tip on $${total} would be $${calculateTips(total, percentTip)}`)
