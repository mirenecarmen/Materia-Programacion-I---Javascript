//contexto string o contexto cadena
//tenemos dos variables
var nombre = "jose";
var apellido = "montes";
var nombreCompleto = nombre + " " +apellido; //primera concatenacion
console.log(nombreCompleto);
var nombreCompleto2 = "ariel" + " " + "gomez"; // segunda concatenacion
console.log(nombreCompleto2);
var juntos = nombre + 219; //aqui lee de izquierda a derecha siguiendo la cadena lee el numero 
// como tipo string
console.log(juntos);
juntos = nombre + 217;
console.log(juntos); // sigue leyendo como un string
//pero si cambiamos el orden sigue respetando el tipo de dato,pero hace la suma,toma el numero 
//como parte del string
juntos = 217 +10+ nombre;
console.log(juntos);

// OTRA MANERA DE CONCATENAR
//tercera concatenacion: usando el operador simplificado 
nombre += apellido;
console.log(nombre);

//ahora vamos al sublimetext

//Hoy ya no se usa var,se una let y const
//let nombreCompleto2 = "Pedro";
//console.log(nombreCompleto);

//const apellido2 = "Lepes";
//apellido2 = "Perez" no puede ser modificada,es una constante
//console.log(apellido2);

//similitudes con java y javascript

// con let declaramos varias variables dentro de una misma linea 
//(tambien podemos asignar varias variables en una misma linea) (tambien sucede en java)
let x,y;
x = 17 
y = 21;
let z = x + y;
console.log(z);
// javascript es case sensitive igual que java
//no se declara una variable con un numero por ejemplo let 1num= 3 o con simbolos

let _1num = 21;
let rompiendo = "rompe";
console.log(_1num);
console.log(rompiendo);
