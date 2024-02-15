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

document.getElementById("my-id") // Find an element by element id
document.getElementsByTagName("a")	// Find elements by tag name
document.getElementsByClassName("my-class")	// Find elements by class name

// Changing HTML
const element = document.getElementById("my-id")
element.innerHTML =  "My new text" // new html content	Change the inner HTML of an element
element.attribute = // new value	Change the attribute value of an HTML element
element.style.property = // new style	Change the style of an HTML element
element.setAttribute(attribute, value)	// Change the attribute value of an HTML element