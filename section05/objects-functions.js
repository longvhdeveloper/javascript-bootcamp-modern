let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326,
}

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723,
}

let getSummary = (book) => {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  }
}

let myBookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(myBookSummary.pageCountSummary)
console.log(otherBookSummary.summary)

// Challenges
convertFahrenheit = (fahrenheit) => {
  let celsisus = (fahrenheit - 32) * (5 / 9)
  let kelvin = (fahrenheit + 459.67) * (5 / 9)

  return {
    fahrenheit,
    celsisus,
    kelvin,
  }
}

let temperature = convertFahrenheit(32)

console.log(`Fahrenheit: ${temperature.fahrenheit}, Celsisus: ${temperature.celsisus}, Kelvin: ${temperature.kelvin}`)
