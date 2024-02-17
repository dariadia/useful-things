/* 

The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
Since modern browsers have implemented almost 
the same methods and properties for JavaScript interactivity, 
it is often referred to, as methods and properties of the BOM.

*/

window
window.innerWidth
window.innerHeight
window.open() // open a new window
window.close() // close the current window
window.moveTo() // move the current window
window.resizeTo() // resize the current window

window.screen // or just screen

screen.width
screen.height
screen.availWidth
screen.availHeight
screen.colorDepth
screen.pixelDepth

window.innerHeight // 293 (console open down below)
window.screen.height // 900 (disregarding resize)
screen.availHeight // => 771, the width of the visitor's screen (px) minus interface e.g. the Windows Taskbar.


// Location

window.location.href // => the href (URL) of the current page
window.location.hostname // =>  the domain name of the web host
window.location.pathname // =>  the path and filename of the current page
window.location.protocol // =>  the web protocol used (http: or https:)
window.location.assign("https://www.google.com") // loads a new document


