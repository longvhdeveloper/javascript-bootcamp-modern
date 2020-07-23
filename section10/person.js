// Prototype Inheritance

const Person = function (firstName, lastName, age, likes = []) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.likes = likes
}

Person.prototype.getBio = function () {
  let bio = `${this.firstName} is ${this.age}`
  this.likes.forEach((like) => {
    bio = bio + ` ${this.firstName} likes ${like}.`
  })
  return bio
}

Person.prototype.setName = function (fullName) {
  ;[this.firstName, this.lastName] = fullName.split(' ')
}

const me = new Person('Long', 'Vo', 32, ['Reading', 'Walking'])
me.setName('Trang Vo')

//me.getBio = function () {
//  return 'This is fake'
//}

console.log(me.getBio())

const person2 = new Person('Jess', 'Turner', 25)

//Person.prototype.getBio = function () {
//  return 'Testing testing'
//}

console.log(person2.getBio())

class PersonClass {
  constructor(firstName, lastName, age, likes) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}. `
    this.likes.forEach((like) => {
      bio = bio + ` ${this.firstName} likes ${like}.`
    })
    return bio
  }
  set fullName(fullName) {
    ;[this.firstName, this.lastName] = fullName.split(' ')
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Employee extends PersonClass {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes)
    this.position = position
  }

  getBio() {
    return `${this.firstName} ${this.lastName} is a ${this.position}.`
  }

  getYearLeft() {
    return 65 - this.age
  }
}

const myPerson = new Employee('Long', 'Vo', 30, 'Developer', ['badminton'])

console.log(myPerson)
console.log(myPerson.getBio())
console.log(myPerson.getYearLeft())

class Student extends Person {
  constructor(firstName, lastName, age, likes, grade) {
    super(firstName, lastName, age, likes)
    this.grade = grade
  }

  getBio() {
    let message = ``
    if (this.grade >= 70) {
      message = `${this.fullName} is passing with score ${this.grade}`
    } else {
      message = `${this.fullName} is falling with score ${this.grade}`
    }
    return message
  }

  updateGrade(grade) {
    this.grade += grade
  }
}

const student = new Student('Long', 'Vo', 30, ['badminton'], 75)
student.fullName = 'Long Vo'
console.log(student.getBio())
student.updateGrade(-10)
console.log(student.getBio())
