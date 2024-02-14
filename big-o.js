/* 
Big O Notation is used in computer science to analyse the performance of an algorithm.

Basically, it's the "cost" of your code. 
Big O Notation tells how long a function will take to execute & how much space it needs. The less – the faster your program works.
Big O Notation deals in "worst case" scenarios.
Depends on input sizes.
Important for scalable, larger apps.

*/

// O(1) - constant time. No matter what number we input – it takes the same amount of time to compute.
function timesTwo(num) {
  return 2 * num
}


// O(log(n)) - logarithmic
function logTime(arr) {
    let numberOfLoops = 0
    for (let i = 1; i < arr.length; i *= 2) {
      numberOfLoops++
    }
    return numberOfLoops
}
let loopsA = logTime([1]) // 0 loops
let loopsB = logTime([1, 2]) // 1 loop
let loopsC = logTime([1, 2, 3, 4]) // 2 loops
let loopsD = logTime([1, 2, 3, 4, 5, 6, 7, 8]) // 3 loops
let loopsE = logTime(Array(16)) // 4 loops



// O(n log(n)) - linearithmic
function mergeSort(array) {
    const merge = (left, right) => {
        let arr = []
        // Break out of loop if any one of the array gets empty
        while (left.length && right.length) {
            // Pick the smaller among the smallest element of left and right sub arrays 
            if (left[0] < right[0]) arr.push(left.shift())  
            else arr.push(right.shift()) 
        }
        
        // Concatenating the leftover elements
        // (in case we didn't go through the entire left or right array)
        return [ ...arr, ...left, ...right ]
    }
    const half = array.length / 2
    
    // Base case or terminating case
    if (array.length < 2)return array 
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
}


// O(n) - linear. Depends on arr.length. If we pass [1,2] (2 el) = 4 operations, 
// [1,2,2,4] (4 el) = 8 operations, etc.
function reverseData(arr) {
  let answer = []
  for (let i = arr.length - 1; i >= 0; i--) {
    answer.push(arr[i])
  }
  return answer
}


// O(n^2) - quadratic. 
// e.g. two loops mean: for each in arr1, use arr2 el, so total operations double
function multiply(arr1, arr2) {
    if (arr1.length !== arr2.length) return
    let total = 0
    for (let i of arr1) {
      for (let j of arr2) {
        total += i * j
      }
    }
    return total
}


// Notable mentions
// O(n^3), O(n^4) ...etc
// O(2^n), etc.




// JS built-in methods
let arr = []
let arr2 = [1,2,3]
arr.push(1) // O(1)
arr.pop() // O(1)
arr.shift() // O(n)
arr.unshift(1) // O(n)
arr.splice(0, 1) // O(n)
arr.sort((a,b) => a - b) // O(n x logn)
arr.filter(el => el === 1) // O(n)
arr.forEach(el => console.log(el)) // O(n)
arr.map(el => el + 1) // O(n)
arr.reduce((el1, el2) => el1 + el2) // O(n)
arr.concat(arr2) // O(n)
arr.slice(0,1) // O(n)
arr.indexOf(3) // O(n)
arr2.some((item) => item === 3) // O(n) - true
arr2.every((item) => item === 1) // O(n) - false
