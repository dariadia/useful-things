/* 
Promise = Object 
Represents: the eventual completion (or failure) of an async operation and its resulting value.

Has states:
- 1 - pending (initial)
- 2 - fulfilled (200)
- 3 - rejected (400-500)
*/ 

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("foo"), 300)
})

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("not allowed!"), 300)
})



const THRESHOLD = 8
const myPromiseConditions = new Promise((resolve, reject) => {
  // if (THRESHOLD > 10) {
  //   reject("not allowed!")
  // } else {
  //   resolve("okay!")
  // }
  if (THRESHOLD > 10) reject("not allowed!")
  else resolve("okay!")
})


// Can be chained
function handleFulfilledA () {}
function handleRejectedA () {}
function handleFulfilledB () {}
function handleRejectedB () {}
function handleFulfilledC () {}
function handleRejectedC () {}

myPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC)
