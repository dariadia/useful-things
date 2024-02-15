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

// Methods: return an array-like(!) collection (NodeList)

document.head // => <head>...</head>
document.anchors // => HTML Collection of <a> elements which are anchors
// same pattern as above
document.forms
document.embeds
document.images
document.scripts
document.title
document.links //  => HTML Collection of <a> elements which point to another resource

// Find an element by element id
document.getElementById("my-id") 
document.querySelector('#my-id')
document.getElementsByTagName("a")	// Find elements by tag name
// Find elements by class name
document.getElementsByClassName("my-class")
document.querySelector('.my-class')
document.querySelectorAll("p.intro") // Find all HTML elements that match a specified CSS selector

const div1 = document.getElementById("div1")
// => <div id="div1">Hi Champ!</div>
const attr1 = div1.getAttribute("id") // div1


// Changing HTML
element.innerHTML =  "My new text" // Change the inner HTML of an element
document.getElementById("my-image").src = "landscape.jpg"
element.setAttribute(attribute, value) // Change the attribute value of an HTML element
element.setAttribute("style", "color:red")

// GOTCHA: Never use document.write() after the document is loaded. It will overwrite the document.
document.write(new Date()) can be used to write directly to the HTML output stream:

