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