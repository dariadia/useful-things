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
