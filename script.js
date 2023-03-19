var item = document.getElementsByClassName('list-group-item')
console.log(item)
console.log(item[1])
item[1].textContent = 'Hello 2'
item[1].style.fontWeight = 'bold'
item[1].style.backgroundColor = 'green'

item.style.backgroundColor = '#f4f4f4'

for(let i=0;i<item.length;i++){
    item[i].style.backgroundColor = '#'
}
