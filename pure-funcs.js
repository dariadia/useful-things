/* 
Pure Functions
1. Always returns the same output, for a given input.
2. No side-effects. 
- Cleaner
- Predictable
- Consistent
- Debuggable
- Portable
*/

let apples = 10
const eatAppleImp = () => apples - 1 // impure
const eatApplePure = (apples) => apples - 1 // pure

/* 
Impure Function: mutates data outside of its lexical scope. By design may not return a value, just do some task.

Impure Functions (by design, inherently)
- DOM manipulation
- Math. random()
- new Date
- User input
- File IO
- Network requests 
*/


// Math.random() is an impure function since it modifies the internal state of the Math object and provides different results with each call.
// No arguments pass into any of the Math.random() function calls, but still they all produce a different result.
Math.random(); (Output: 0.4450692005082965)
Math.random(); (Output: 0.7533405303023756)
Math.random(); (Output: 0.4011148700956255)

// No arguments but produces a different result.
Date.now()

// Modifies the initial array, returns the "cut off" part
arr.splice()

// Modifies the initial array, returns the length of the said array
arr.push()

// Modifies the initial array, returns the sorted array
arr.sort()

// are also impure functions (although they generate the same behavior and always return the same value for identical calls).
alert()
console.log() 

// JavaScript is synchronous by its nature. Therefore, asynchronous functions such as fetch and promise are impure.
fetch()
new Promise
