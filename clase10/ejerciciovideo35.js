/*10.2 Ejercicio 1: Calcular estación del año

let mes = 4; //codigo duro
let estación;//variable undefined
if (mes == 1 || mes == 2 || mes == 12){
    estación = "Verano";
}
else if (mes == 3 || mes == 4 || mes == 5){ //estos son condicionales anidados
    estación = "Otoño";
}
else if (mes == 6 || mes == 7 || mes == 8){ //con el condicional or || al cumplirse una condicion ya es tdo verdadero
    estación = "Invierno";
}
else if (mes == 9 || mes == 10 || mes == 11){
    estación = "Primavera";
}
else {
    estación = "valor incorrecto";
}
console.log("el valor corresponde a la estacion de :",estación); */

/* Ejercicio 2:hora del dia
de 6 a 11 nos saluda :Good morning
de 12 a 16 nos saluda :Good afternoon
de 17 a 19 hs nos saluda:Good evening
de 20 a 23 hs nos saluda: Good night
trabajaremos con 24 hs
*/
let horaDia = 9;
let mensaje;
if (horaDia >= 6 && horaDia <= 11){
    mensaje = "Good morning";
}
else if (horaDia >= 12 && horaDia <= 16){
    mensaje = "Good afternoon";
}
else if (horaDia >= 17 && horaDia <= 19){
    mensaje = "Good evening";
}
else if (horaDia >= 20 && horaDia <= 23){
    mensaje = "Good night";
}
else{
    mensaje ="valor incorrecto";
}
console.log(mensaje);
