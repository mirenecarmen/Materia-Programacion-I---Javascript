// estructura switch,la estructura es igual a la de Java
switch(mes){ // no solo se pueden utilizar numeros,sino tambien cadenas
    case 1: case 2: case 12:
        estacion = "verano";
        break;
    case 3: case 4: case 5:
        estacion = "otoño";
        break;
    case 6: case 7: case 8:
        estacion = "invierno";
        break;
    case 9: case 10: case 11:
        estacion = "primavera";
        break;
    default:
        estacion = "valor incorrecto";
}
console.log("bienvenidos a la estacion de:"+estacion);