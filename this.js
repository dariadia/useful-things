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



function talk() {
  return 'I am ${this.name}
}
const me = { name: 'Jane' ｝
const meTalk = talk.bind(me)
meTalk() // "I am Jane"


