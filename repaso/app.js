console.log("Primer Ejercicio")

let cadena = "";

for (let i = 0; i <=4; i++) {
    cadena += "\nX";
}
console.log(cadena);

let cadena2 = ""

for (let j=0; j<=4; j++){
    cadena2 += "X";
}
console.log(cadena2);

console.log("Segundo ejercicio mediante funciones")

function vertical(){

    let cadena = "";

    for (let i=0; i<=4; i++) {
        cadena += "\nX";
    }
    console.log(cadena);
}

function horizontal(){

    let cadena = "";

    for (let i=0; i<=4; i++) {
        cadena += "X";
    }
    console.log(cadena);
}

horizontal()
vertical()

console.log("Tercer ejercicio mediante funciones y un dato ingresado")

let dato = parseInt(prompt("Ingresa un numero miamor"))

function ver(){

    let cadena = "";

    for (let i=0; i<=dato; i++) {
        cadena += "\nX";
    }
    console.log(cadena);
}

function hori(){

    let cadena = "";

    for (let i=0; i<=dato; i++) {
        cadena += "X";
    }
    console.log(cadena);
}

ver()
hori()

console.log("Cuarto ejercicio: tablas de multiplicar")

function tablas(){
    for (let i=1; i<=10; i++){
        console.log("Tabla del: "+i);

        for(let j=1; j<=10; j++){
            console.log(i+"X"+j+"="+i*j);
        }
    }
}
tablas()

console.log("Quinto ejercicio: frutas")

function frutass(){
    let frutas = ["manzana", "pera", "sandia", "papaya", "mango", "durazno", "platano", "uva", "naranja", "mandarina"];
    frutas.forEach((fruta,indice) => {
        console.log("Indice: "+indice+" fruta: "+fruta)
    });
}

frutass()