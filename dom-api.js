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
document.getElementById("div1").style.color = "blue"

// GOTCHA: Never use document.write() after the document is loaded. It will overwrite the document.
document.write(new Date()) can be used to write directly to the HTML output stream:



// Events
element.addEventListener("click", function() { alert("Hello World!") })

// The addEventListener() method allows you to add many events 
// to the same element, without overwriting existing events:
element.addEventListener("click", myFunction)
element.addEventListener("click", mySecondFunction)

/* Event Bubbling & Event Capturing
There are 2 event propagation ways in the HTML DOM: bubbling and capturing.

Event propagation is a way of defining the element order when an event occurs. 
If you have a <p> element inside a <div> element, and the user clicks on the <p> element:
- in bubbling the inner most element's event is handled first and then the outer: 
the <p> element's click event is handled first, then the <div> element's click event.
- in capturing the outer most element's event is handled first and then the inner: 
the <div> element's click event will be handled first, then the <p> element's click event.

With the addEventListener() method you can specify the propagation type by using the "useCapture" parameter: 

*/

element.addEventListener(event, function, useCapture)
document.getElementById("my-div").addEventListener("click", myFunction, true)

