//tehtävä 1
let x = 1
let y = 2
let z = ' moi '

//tehtävä 2
let numerot = [ 0, 1, 2 , 3, 4 , 5, 6 , 7, 8 , 9 ]
let taulukko1 = [ 1, 2, [3 , 4 ], 5 , 6 ]

//tehtävä 3
function summa(x, y){
    return x + y
}
function erotus (x, y) {
    return x - y
}
function tulo (x,y){
    return x * y
}
function osamaara (x, y){
    return x / y
}
function potenssi(x, y) {
    return x ** y
}
function jakojaannos(x, y) {
    return x % y
}

//tehtävä 4
let element = document.createElement ('div')
element.id = 'indifikaaltori'
element.classList.add('name')
element.innerHTML = 'Anastasiia'
document.body.appendChild(element)

//tehtävä 5
for (let k = 0; k < numerot.length; k++){
    numerot[k] = numerot[k] + 1
}

numerot.forEach((value, index, arr) => {
    arr[index] = value +1
})

let i = 0
while(i < numerot.length) {
    numerot[i] = numerot[i] + 1
    i++
}

//tehtävä 6
let sanat = [ 'JavaScript', 'PHP' , 'HTML' ]
function createElement(value){
    let element = document.createElement ('p')
    element.classList.add(value)
    element.innerHTML = value
    document.body.appendChild(element)
}
sanat.forEach(createElement)

// bonus 1
//while(true){
//console.log(Moi, Juho!)
//}

//for(;;){}

// bonus 2 toisessa tiedostossa
