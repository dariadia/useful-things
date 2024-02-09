// Inheritance using Classes
class Person {
  talk = () => console.log('I am talking');
}

const me = new Person()
me.talk()

// To update:
Person.prototype.talk = () => console.log('New! I am talking')

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

