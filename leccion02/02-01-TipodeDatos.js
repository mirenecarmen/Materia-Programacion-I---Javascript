// comentario de una lines,lleva solo dos barras invertidas
/* comentario de multiples lineas van con barra invertida y asterisco 
*/

/* el archivo figura con un circulito blanco,significa que hay que ponerle el nombre de la extension 
del archivo y guardarlo.
Lo guardamos apretando Ctrl + s
*/

//tipo de dato:String
var nombre = 'Irene';
console.log(nombre);
// ahora probamos haciendo una reasignacion de variable,tambien usamos Typeof para saber que tipo de
//variable es
nombre = 7;
console.log(typeof nombre);
// tipo numerico
var nombre = 300;
console.log(nombre);





// tipo objeto
var objeto ={
    nombre : 'Irene',
    apellido : 'mach',
    edad : '38'
};
console.log(typeof objeto);

//tipo de dato booleano:tienen dos valores,True o False,este tipo de variables tambien se conocen 
// como "BANDERA",cuando esta en rojo se detiene,cuando esta en verde se avanza.
var bandera = true;
console.log(typeof bandera); //guardamos con CTRL+ S y luego hacemos F1 para que aparezca Toggle y compile

// Ahora veremos "FUNCIONES": las funciones se utilizan para ejecutar una tarea especifica
//las funciones se pueden reutilizar las veces que sean necesarias,para esto.lo que hacemos es
// "LLAMARLAS"

function mifuncion() {}
console.log(typeof mifuncion);

// tipo de dato symbol
var simbolo = Symbol("este es un dato de tipo simbolo");
console.log(typeof simbolo);

// tipo de dato : CLASE (es tambien una funcion)

class personas {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

}
console.log(typeof personas);
console.log(personas);

// tipo de dato UNDEFINED
var x;
console.log(typeof x);

// NULL,es ausencia de valor,no tiene ningun tipo de dato
// no es un tipo de dato,pero esta considerado que su origen es un tipo de dato OBJECT u objeto
var y = null;
console.log(y);
console.log(typeof y);

//tipo de dato ARRAY ,son de tipo OBJETO ,lo definimos con corchete,pueden tener cualquier tipo
// de dato

var autos =['citroen','audi','ford'];
console.log(autos);
console.log(typeof autos);

// empty String significa "una cadena vacia"

var z = '';
console.log(z);
console.log(typeof z);