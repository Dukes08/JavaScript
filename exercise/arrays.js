var fruits = ["apple","banana","cherry","strawberry"];

//muestra en consola el array
console.log(fruits);

//muestra la cantidad de elementos del array
fruits.length;

//mostrar lo que se encuentra en un indice especifico del array 

console.log(fruits[0]);

//en lo que se muestra anteriormente se mostrara en consola apple al estar en el indice 0

//para agregar un elemento al final del array usamos el metodo push

var more = fruits.push("uva")

//para eliminar un elemento al final solamente utilizamos pop

var less = fruits.push("uva")

//para agregar un elemento al inicio solamente utilizamos unshift

var less = fruits.unshift("uva")

//para eliminar un elemento al inicio solamente utilizamos shift

var less = fruits.shift("uva")

//saber la posicion de un elemento dado su nombre 

var position = fruits.indexOf("uva")

//luego al hacer console.log(position) regresa la posicion de la variable uva

//programa que saluda estudiante por estudinate a traves de un for loop

var estudiantes = ["Hugo","Giovanna","Gioni"];

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i<estudiantes.length; i++){
    saludarEstudiante(estudiantes[i])
}

/*Primero establecemos el array
luego la funcion con la cual nos encargaremos de utilizarlo
y al final el loop conectando la funcion con el array
el codigo console.log(`Hola, ${estudiante}`); permite meter cada estudiante donde dice estudiante*/


for(var estudiante of estudiantes){
    saludarEstudiante(estudiante);
}

//while loop

function sayingHiStudent(estudiante){
    console.log(`Hola, ${estudiante}`)
}

while(estudiantes.length>0){
    var estudiante = estudiantes.shift();
    sayingHiStudent(estudiante)
}


/*el algoritmom anterior esta usando un while loop para
vaciar el array, mientras saluda a cada estudiante*/

