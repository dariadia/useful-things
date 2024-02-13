// This is dynamic

const jane = {
  name: "Jane Doe",
  talk: () => console.log("My name is" + this.name)
  thising: () => console.log(this)
}
// base* rule: what's on the left side = is "this"
jane.thising() // jane



function mocking { return console.log("I am mocking") }
mocking() // === window.mocking()



function talk(arg) {
  return `I am ${this.name}${arg}`
}
const me = { name: 'Jane' ｝
const meTalk = talk.bind(me) // bind "this" here to (me)
meTalk() // "I am Jane"

talk.call(me, ...arrayArgs) // call this function with var = this, so === "I am Jane"
talk.apply(me, [arg1, arg2]) // same as above, different syntax



function Person(name) {
  this.name = name
  this.talk = function() {
  console.log(1, this)
｝
setTimeout(function() {
  console.log(2, this)
}
const simon = new Person("Simon")
// 1, { name: Simon }
// 2, Window. Because callback functions are run in another context.
// To fix: bind, or arrow func


// Arrow functions do NOT create their own execution context, they use the context of where they were created
const me1 = {
  name: 'Jane'
  arrowTalk: () => this // === Window, because arrow functions create no binding to the object
｝

const me2 = {
  name: 'Jane",
  talk() {
    setTimeout(() => console.log(this.name)， 100）// Jane, because the async setTimeout is bound to the object while console.log runs in its context
  }
}


// DOM gotcha
// For functions browsers automatically bind the "this" context to the element the event lister is attached to. 
// But arrow functions still have their "this" pointing at the context they were created in, usually the global Window scope
document.body.addEventListener('click', () => console.log(this)) // Window
document.body.addEventListener('click', function() { console.log(this)) } // body
