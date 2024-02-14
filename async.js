/* 

Runs in the background.
Does not defer other processes.
Useful: large contentful paints (LCP)

*/

// Await examples
function foo() {
  return Promise.resolve(1).then(() => console.log("ready")
}
  
async function foo2() {
  await 1
}

function resolveLater() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved')
    }, 2000)
  })
}
  
async function asyncCall() {
  console.log('calling')
  const result = await resolveLater()
  console.log(result) // "resolved"
}
  
// asyncCall()
