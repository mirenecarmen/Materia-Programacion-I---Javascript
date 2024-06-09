//Hoy ya no se usa VAR,se usa Let y const

let nombre2 = "Pedro";
console.log(nombre2);

const nombre3= "Guadalupe";
//nombre3 = "-maria" // da error,porque una constante no se puede renombrar
console.log(nombre3);

// Aclaracion sobre el uso de VAR
/*
Con VAR se puede reasignar en cualquier momento
este forma del ambito global
un error es que se sobreescriba
*/
var nombre = "Ariel";
nombre = "Osvaldo";
console.log(nombre);

function saludar(){
    var nombre = "natalia";
    console.log(nombre);
}
console.log(nombre);// aqui no lee el dato en la funcion
if (true){
    var edad = 34;
    console.log(edad)
}
console.log(edad);// en la funcion funcionó correctamente,pero en la estructura
// IF falló

/*
Let:esta puede ser reasignada en cualquier momento
la diferencia es que su ambito es de bloque
solo disponible dentro de un bloque de llaves,o dentro de una funcion
*/
function saludar2(){
    let nombreA = "ariel";
    console.log(nombreA);
}
///console.log(nombreA);

if(true){
    let edad2 = 33;
    console.log(edad2);
}
//console.log(edad2);
//El LET funciona de manera deficiente en bloques como el if
/*
const:se utiliza para valores constante que no pueden ser reasignados
*/
const fechaNacimiento = 2006;
console.log(fechaNacimiento);
//fechaNacimiento = 2003;
//console.log(fechaNacimiento); // solo se ejecuta el console anterior