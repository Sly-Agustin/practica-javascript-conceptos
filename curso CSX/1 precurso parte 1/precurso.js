// Debido a la simplicidad del curso va todo en un mismo archivo

/*  HOLA MUNDO  
Puede ejecutarse tanto con comillas simples como con comillas dobles, la diferencia entre usar uno y otro puede radicar en 
si lo de adentro debe contener comillas simples o dobles, por ejemplo como se ve en los logs de abajo. También puede 
usarse con una barra invertida adelante para skipear la comilla */
console.log("Hello world!");
console.log('Hello world!');
console.log("Esto es una comilla simple: ' ");
console.log('Esto es una comilla simple: \' ');
console.log('Esto es una comilla doble: " ');
console.log("Esto es una comilla doble: \" ");
console.log("\n");

/* VARIABLES
Al igual que en los console.log, se puede usar comillas simples o dobles teniendo en cuenta las mismas restricciones */
var saltoDeLinea = "\n";
var variable1 = "Soy una variable string";
var variable2 = 'Soy una variable string entre comillas simples';
var variableNum1 = 0;
var variableNum2 = 10;
/* Notar la diferencia entre los siguientes consoles log, el primero imprime todo junto mientras que las ',' del segundo
agregan un espacio*/
console.log("VARIABLES \n");
console.log(variable1+""+saltoDeLinea+""+ variable2);
console.log(variable1, saltoDeLinea, variable2);
console.log('Imprimo números: ', +variableNum1, variableNum2);
console.log("\n");

/* DIFERENCIAS ENTRE CONST, VAR Y LET

const: constante, una vez declarado el valor este no puede cambiar, si se intenta cambiar el valor de una constante
el programa tira error.

var: declara una variable para todo el bloque, si se llama a una función dentro del bloque esta puede usar la variable declarada
antes.

let: declara una variable que solo es visible en el bloque actual, si se quiere usar en una función u otra cosa que no pertenezca
al bloque es necesario pasarla como argumento (solo copia el valor, no la referencia) y una vez terminada la función si se quiere
cambiar el valor es necesario hacerlo en el bloque, todo lo que se haya cambiado en la función no se lleva afuera.

EJEMPLO CONST:
const variableString: "cadena";
variableString = "cadena nueva"; -> Esto provoca un error*/

//EJEMPLO LET QUE NO FUNCIONA POR ESTAR FUERA DEL BLOQUE:
console.log("EJEMPLOS LET Y VAR \n");

let saludo = "hola!";
function modificarSaludo(){
    saludo = "Buenos dias";     //-> saludo no está en este bloque por ser declarada con let
}
console.log(saludo);    //-> Imprime "hola!"
modificarSaludo();
console.log(saludo);    //-> Vuelve a imprimir "hola!"

//EJEMPLO LET CORRECTO
//no se vuelve a declarar la variable porque quedó de antes
function modificarSaludo(){
    return "Buenos dias";
}
console.log(saludo);    //-> Imprime "hola!";
saludo = modificarSaludo();
console.log(saludo);    //->Imprime "Buenos días";