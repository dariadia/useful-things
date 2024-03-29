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

/* Nodes
Navigating Between Nodes: 
- parentNode
- childNodes[nodenumber]
- firstChild
- lastChild
- nextSibling
- previousSibling 
*/

<h1 id="id01">My First Page</h1>
document.getElementById("demo").childNodes[0].nodeValue
document.getElementById("id01").nodeName // => H1

/* 

Node	Type	Example
ELEMENT_NODE	1	<h1 class="heading">W3Schools</h1>
ATTRIBUTE_NODE	2	 class = "heading" (deprecated)
TEXT_NODE	3	W3Schools
COMMENT_NODE	8	<!-- This is a comment -->
DOCUMENT_NODE	9	The HTML document itself (the parent of <html>)
DOCUMENT_TYPE_NODE	10	<!Doctype HTML>

*/

// Creating New HTML Elements 
const para = document.createElement("p")
const node = document.createTextNode("This is a new paragraph.")
para.appendChild(node)

const element = document.getElementById("div1")
const child = document.getElementById("p1")

// variants on how to:
element.appendChild(para)
element.insertBefore(para, child)

// removing elements
// GOTCHA: remove() doesn't work in older browsers, use removeChild() instead.
element.remove()
child.parentNode.removeChild(child)

/* HTMLCollection VS NodeList
- An HTMLCollection is always a live collection. 
Example: If you add a <li> element to a list in the DOM, 
the list in the HTMLCollection will also change.

- A NodeList is most often a static collection. 
Example: If you add a <li> element to a list in the DOM, 
the list in NodeList will NOT change.

otherwise, are very much the same thing.

- Some (older) browsers return a NodeList object 
instead of an HTMLCollection for methods like getElementsByClassName().
- All browsers return a NodeList object for the property childNodes. 
- Most browsers return a NodeList object for the method querySelectorAll().
