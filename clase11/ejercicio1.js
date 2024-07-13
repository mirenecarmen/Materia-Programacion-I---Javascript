/* const se utiliza para valores constantes que no pueden ser reasignados
*/

const fechaNacimiento = 2006;
console.log(fechaNacimiento);
//fechaNacimiento = 2003
//console.log(fechaNacimiento); solo se ejecuta el console anterior

//evitar repetir tu codigo
// try dont repeat yourself

//este codigo es mas corto que con el uso de switch/break
//es un codigo mejorado

let days2 = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo']; //creamos un arreglo
function getDay(n){//creamos una funciona getday con el parametro n
    if(n<1 || n>7){
        throw new Error('out of range');
    }
    return days2[n-1]
}
console.log(getDay(u))
