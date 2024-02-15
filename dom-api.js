/* 
The Document Object Model (DOM) is the data representation of the objects 
that comprise the structure and content of a document on the web. 
Basically: how your data gets on the webpage.

GOTCHA:
The presence of whitespace in the DOM can cause layout problems 
and make manipulation of the content tree difficult in unexpected ways, 
depending on where it is located. This article explores 
when difficulties can occur, and looks at what 
can be done to mitigate resulting problems.

*/

// Methods

// Find an element by element id
document.getElementById("my-id") 
document.querySelector('#my-id')

document.getElementsByTagName("a")	// Find elements by tag name

// Find elements by class name
document.getElementsByClassName("my-class")
document.querySelector('.my-class')

const div1 = document.getElementById("div1")
// => <div id="div1">Hi Champ!</div>
const attr1 = div1.getAttribute("id") // div1


// Changing HTML


element.innerHTML =  "My new text" // Change the inner HTML of an element
element.attribute = // Change the attribute value of an HTML element
element.style.property = // Change the style of an HTML element
element.setAttribute(attribute, value)	// Change the attribute value of an HTML element
