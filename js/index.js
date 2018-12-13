//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var element = document.createElement('div')
undefined
element.innerHTML = 'Hello, Dom. I am over here creating you in the console')
VM381:1 Uncaught SyntaxError: Unexpected token )
element.innerHTML = 'Hello, Dom. I am over here creating you in the console'
"Hello, Dom. I am over here creating you in the console"
element
<div>​Hello, Dom. I am over here creating you in the console​</div>​
element.style.backgroundColor ="black"
"black"
element
<div style=​"background-color:​ black;​">​Hello, Dom. I am over here creating you in the console​</div>​
element
<div style=​"background-color:​ black;​">​Hello, Dom. I am over here creating you in the console​</div>​
document.body.appendChild(element)
<div style=​"background-color:​ black;​">​Hello, Dom. I am over here creating you in the console​</div>​
element.style.textDecorationColor = "white"
"white"
element
<div style=​"background-color:​ black;​ text-decoration-color:​ white;​">​Hello, Dom. I am over here creating you in the console​</div>​
element.innerText.fontcolor = "white"
"white"
element.innerText.fontcolor(white)
VM1812:1 Uncaught ReferenceError: white is not defined
    at <anonymous>:1:29
(anonymous) @ VM1812:1
element.innerText.fontcolor = white
VM1841:1 Uncaught ReferenceError: white is not defined
    at <anonymous>:1:31
(anonymous) @ VM1841:1
element.innerText.fontcolor; white
VM1874:1 Uncaught ReferenceError: white is not defined
    at <anonymous>:1:30
(anonymous) @ VM1874:1
element.innerText.fontcolor
ƒ fontcolor() { [native code] }
fontcolor(white)
VM1989:1 Uncaught ReferenceError: fontcolor is not defined
    at <anonymous>:1:1
(anonymous) @ VM1989:1
element.fontcolor(__lookupGetter__
VM2060:1 Uncaught SyntaxError: missing ) after argument list
element.innerText.fontcolor = "green"
"green"
document.body.appendChild(element)
<div style=​"background-color:​ black;​ text-decoration-color:​ white;​">​Hello, Dom. I am over here creating you in the console​</div>​
var ele = document.createElement('p')
undefined
ele.innerText = "this is another test and im just tryuing to see if everything is going to sho0w up on the screen"
"this is another test and im just tryuing to see if everything is going to sho0w up on the screen"
document.body.appendChild(ele)
<p>​"this is another test and im just tryuing to see if everything is going to sho0w up on the screen"</p>​
ele.style.color ="blue"
"blue"
document.body.appendChild(ele)
<p style=​"color:​ blue;​">​…​</p>​
element.removeAttribute('background-color')
undefined
element
<div style=​"background-color:​ black;​ text-decoration-color:​ white;​">​Hello, Dom. I am over here creating you in the console​</div>​
element.removeAttribute.style
undefined
element
<div style=​"background-color:​ black;​ text-decoration-color:​ white;​">​Hello, Dom. I am over here creating you in the console​</div>​
element.removeAttribute.name('background-color')
VM3651:1 Uncaught TypeError: element.removeAttribute.name is not a function
    at <anonymous>:1:25
(anonymous) @ VM3651:1
var ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);
<ul>​…​</ul>​<li>​1​</li>​<li>​2​</li>​<li>​3​</li>​</ul>​
ul.style.textAlign = 'left'
"left"
ul.removeChild(ul.querySelector('li:nth-child(2)'))
<li>​2​</li>​
ul.remove()
