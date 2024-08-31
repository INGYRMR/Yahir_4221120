let a = prompt("Ingresa un primer valor a sumar: ")
let b = prompt("Ingresa un segundo valor a sumar: ")

function sumar (a,b){
    return parseInt(a) + parseInt(b)

}

let resultado = sumar(a,b)
console.log = prompt("La suma de "+a+" + "+b+" = "+resultado)
