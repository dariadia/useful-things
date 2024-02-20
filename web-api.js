// JavaScript Validation API
checkValidity()	// => true if an input element contains valid data.
setCustomValidity("Some error text goes here")	// Sets the validationMessage property of an input element.

validity //	Contains boolean properties related to the validity of an input element.
validationMessage	// Contains the message a browser will display when the validity is false.
willValidate // Indicates if an input element will be validated.
customError	// Set to true, if a custom validity message is set.
patternMismatch	// Set to true, if an element's value does not match its pattern attribute.
rangeOverflow	// Set to true, if an element's value is greater than its max attribute.
rangeUnderflow	// Set to true, if an element's value is less than its min attribute.
stepMismatch	// Set to true, if an element's value is invalid per its step attribute.
tooLong	// Set to true, if an element's value exceeds its maxLength attribute.
typeMismatch	// Set to true, if an element's value is invalid per its type attribute.
valueMissing	// Set to true, if an element (with a required attribute) has no value.
valid	// Set to true, if an element's value is valid.

function validate(inputID) {
  const input = document.getElementById(inputID)
  const validityState = input.validity
  if (validityState.valueMissing) {
    input.setCustomValidity("You gotta fill this out, yo!")
  } else if (validityState.rangeUnderflow) {
    input.setCustomValidity("We need a higher number!")
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity("Thats too high!")
  } else input.setCustomValidity("")
  input.reportValidity()
}

function validatePostCode(evt) {
  let el=evt.target
  if (el.validity) {
    // HTML5 aware browsers
  if (el.validity.patternMismatch) {
    el.setCustomValidity('Not a valid UK Postal Code.eg:G1 1AA ');
  } else el.setCustomValidity("")
  } else {
  // fallback for legacy browsers.
  }
}

document.getElementById('txtPostcode').addEventListener('blur',validatePostCode,false)



// A web worker 
// - is a JS running in the background, without affecting the performance of the page.
let w

function startWorker() {
  if(typeof(w) == "undefined") {
    w = new Worker("demo_workers.js")
  }
  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
  }
}

function stopWorker() { 
  w.terminate()
  w = undefined
}
w.terminate() // To terminate and free browser/computer resources, use this.
w = undefined // if set to undefined, after it has been terminated, you can reuse the code.
