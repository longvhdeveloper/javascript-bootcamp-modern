const square = (num) => {
  return num * num
}

console.log(square(5))

const peoples = [
  {
    name: 'Jackie',
    age: 31,
  },
  {
    name: 'William',
    age: 28,
  },
  {
    name: 'Jess',
    age: 22,
  },
]

const under30 = peoples.filter((people) => people.age < 30)

console.log(under30)

peoples
  .filter((people) => people.age === 22)
  .forEach((people) => {
    console.log(people.name)
  })
