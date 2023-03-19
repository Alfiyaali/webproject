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


var titles = document.querySelectorAll('.title')

console.log(titles)
titles[0].textContent = 'Hello'

var odd = document.querySelectorAll('li:nth-child(odd)')
var even = document.querySelectorAll('li:nth-child(even)')

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = '#f4f4f4'
    even[i].style.backgroundColor = '#ccc'
}