const jane = {
  name: "Jane Doe",
  talk: () => console.log("My name is" + this.name)
  thising: () => console.log(this)
}

// base* rule: what's on the left side = is "this"
jane.thising() // jane

function mocking { return console.log("I am mocking") }
mocking() // === window.mocking()
