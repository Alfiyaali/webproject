// var li = document.getElementsByTagName('li')
// var newitem = document.getElementsByClassName('new-item')[0]

// console.log(li)
// console.log(li[1])
// li[1].textContent = 'Hello 2'
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'green'
// li[2.].style.visibility = 'hidden'

// for(let i=0;i<li.length-1;i++){
//     li[i].style.backgroundColor = '#'
// }

// console.log(newitem);
// newitem.textContent = 'new list item'
// newitem.style.border = "1px solid lightgrey"
// newitem.style.listStyle = "none"
// newitem.style.padding = "10px 20px"


// var titles = document.querySelectorAll('.title')

// console.log(titles)
// titles[0].textContent = 'Hello'

// var odd = document.querySelectorAll('li:nth-child(odd)')
// var even = document.querySelectorAll('li:nth-child(even)')

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = '#f4f4f4'
//     even[i].style.backgroundColor = '#ccc'
// }



//Transversing the dom
var itemList = document.querySelector("#items");
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode)

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement)

//childNode
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';


//first child
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1'

//lastChild
// console.log(itemList.lastChild);
//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
// console.log(itemList.nextSibling);
//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
//nextElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//create Element

//create div

var newdiv = document.createElement('div');

//add class
newdiv.className = 'hello';

//add id
newdiv.id = 'hello1'

//add attr
newdiv.setAttribute('title', 'Hello Div');

//create tex node
var newdivText = document.createTextNode('hello world');

//add text to div
newdiv.appendChild(newdivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newdiv);

newdiv.style.fontSize = '30px';

container.insertBefore(newdiv, h1);