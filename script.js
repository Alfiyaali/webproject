var li = document.getElementsByTagName('li')
var newitem = document.getElementsByClassName('new-item')[0]

console.log(li)
console.log(li[1])
li[1].textContent = 'Hello 2'
li[1].style.fontWeight = 'bold'
li[1].style.backgroundColor = 'green'
li[2.].style.visibility = 'hidden'

for(let i=0;i<li.length-1;i++){
    li[i].style.backgroundColor = '#'
}

console.log(newitem);
newitem.textContent = 'new list item'
newitem.style.border = "1px solid lightgrey"
newitem.style.listStyle = "none"
newitem.style.padding = "10px 20px"
