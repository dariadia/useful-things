// Inheritance using Classes
class Person {
  talk = () => console.log('I am talking');
}

const me = new Person()
me.talk()

// To update:
Person.prototype.talk = () => console.log('New! I am talking')

class SuperHuman extends Person {
  fly = () => console.log('I am flying')
}
const me = new SuperHuman()
me.talk()
me.fly()



// Inheritance using a Constructor Function
function Person() {}
Person.prototype.talk = () => console.log('Talking')
const me = new Person()
me.talk()



// Inheritance using pure objects with Object.create
const person = {
  talk = () => console.log('Talking')
}
const me = Object.create(person)
me.talk()



// Inheritance using pure objects with Object.setPrototypeOf
const person = {}
person.__proto__.talk = () => console.log('Talking')
const me = {}
Object.setPrototypeOf(me, person)
me.talk()
