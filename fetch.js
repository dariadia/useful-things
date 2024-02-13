/* 
The Fetch API 
= interface for requests and responses
Type: global, async
Base: Promises, + CORS, + extensions
Returns: a promise(!!) that resolves with a Response object.
Older methods: XMLHttpRequest 

*/

// Base case
async function fetchData() {
  const url = "https://some-example-url.com"
  fetch(url)
    .then(response => {
      // handle the response
    })
    .catch(error => {
      // handle the error
    })
}

// await case
async function logUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()
  console.log(users)
}

// local documents
async function logLocalDoc() {
  fetch('/README.txt')
    .then(response => response.text())
    .then(data => console.log(data))
}

// local documents
async function fetchText() {
  let response = await fetch('/README.txt')
  let data = await response.text()
  console.log(data)
}

// local documents (not there)
async function fetchTextNone() {
  let response = await fetch('/i-do-not-exist.txt')
  console.log(response.status) // 400
}


// Error Handling
async function getUsers() {
  let url = 'https://jsonplaceholder.typicode.com/users'
  try {
    let res = await fetch(url)
    const data = await res.json()
    console.log(data)
  } catch (error) console.log(error)
}

async function getUsersError() {
  let url = 'https://jsonplaceholder.typicode.com/users-not-here'
  let res = await fetch(url)
  // if (res.status !== 200) console.log("response:", res)
  // if (res.status === 422) console.log("response:", 422)
  if (!res.ok) console.log("response:", res.status)
  else console.log(await res.json())
}



// Fetch options
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST", // GET, POST, PUT, DELETE
    mode: "cors", // no-cors, cors, same-origin
    cache: "no-cache", // default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, follow, error
    referrerPolicy: "no-referrer", // no-referrer, no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // must match "Content-Type" header
  });
  return response.json()
}

postData("https://jsonplaceholder.typicode.com/posts", { answer: "ok done!" }).then((data) => {
  console.log(data);
});
