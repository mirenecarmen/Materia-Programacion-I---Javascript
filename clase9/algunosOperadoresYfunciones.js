//Operador OR se simboliza con || ,la sintaxis es igual que es JAVA

//ejercicio :si el padre puede asistir al juego de su hijo
let vacaciones = true;
let diaDescanso = false;
if (vacaciones || diaDescanso){
    console.log("El padre puede asistir al juego de su hijo.")
}
else{
    console.log("El padre no puede asistir al juego de su hijo.")
}
//9.2 Operador ternario: Ejercicio Par Impar (es la misma sintaxis que en JAVA),es con el signo ?
//se usa para codigos cortos,en pocas lineas de codigo
//primero se carga la expresion boleana

let resultado2 = 1>2 ? "verdadero" : "falso";
console.log(resultado2);

let numero = 9;
resultado2 = numero % 2 == 0 ? "Es un numer PAR":"Es un numero IMPAR";
console.log(resultado2)

//9.3 Función Number: Ejercicio, es mayor de edad (convertir a String)
//Convertir String a numero
 // esta es una funcion
//console.log(typeof edad2);
//ahora le agregamos un condicional
//if (edad2 >= 18){ 
    //console.log("puede votar");
//}
//else{
   // console.log("no puede votar");
//}
//let resultado3 = edad2 >= 18 ? "Puede votar" : "no puede votar";
//console.log(resultado3);

//9.4 Función isNaN: is not a number -devuelve un boleano
//Que pasa si en donde ingresé un numero como cadena,le agrego una letra?ejemplo 10x
//en este caso ,ya la evaluacion no se realiza correctamente
//isNaN sirve para verificar el valor de una variable que sea de tipo numerica
let miNumero = "17";//es una cadena,pero no puede 10x por ejemplo
console.log(typeof miNumero);

let edad2 = Number(miNumero);
console.log(typeof edad2);
if(isNaN(edad2)){
    console.log("Esta variable no es un numero,la variable solo debe contener") //si la funcion nos da un resultado true,muestra un mensaje
}
else{
    if (edad2 >= 18){ 
        console.log("puede votar");
    }
    else{
        console.log("Muy joven para votar,no puede votar");
    }
let resultado3 = edad2 >= 18 ? "Puede votar" : "no puede votar";
console.log(resultado3);
}
