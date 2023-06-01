let dom;
dom=document;
console.log(dom)

let button = dom.getElementById("button")
console.log(button)
console.log(button.id)
console.log(button.className)

let table = dom.getElementById("table1")
console.log(table)

let tables = dom.getElementsByClassName("table")
console.log(tables)
console.log(tables[0])
console.log(tables[1])
console.log(tables.length)

let tableBodies= dom.getElementsByTagName("tbody")
console.log(tableBodies)

console.log(dom.querySelector('#table1'))

console.log(dom.querySelector('h1'))

let tableTwo = dom.querySelector('#table2')
console.log(tableTwo)
let marksRow = tableTwo.querySelector("tr td:nth-child(2)")
console.log(marksRow)
marksRow.innerHTML = 'Noam'


let body = dom.body
console.log(body)
let elem = dom.createElement('div');
elem.classList.add('custom-div')
elem.innerHTML = "We created this div with JS"
body.appendChild(elem)

dom.querySelector('#button').addEventListener('click', onclick)
function onclick(event){
    console.log('I am a button that has been clicked');
    let val;
    val=event;
    console.log(val);
    val=event.target.id
    console.log(val)
    event.target.innerHTML = 'Hello';
}

button.addEventListener('mouseenter', (event)=>(console.log("we're here")) )


localStorage.setItem('name','Noam')
let name = localStorage.getItem('name')
console.log(name)
localStorage.clear()

function onButtonClicked(){
    console.log('vibes')
}