
/*
en este apartado hablamos
de variables
*/ 

//declaracion de variable
var edad;
// inicializar variable
edad = 19;

var elementos = ["computer", "phones"];

/*
en este apartado hablamos
de funciones
*/ 

//funciones del tipo declarativas

function myFunction(){
    return 3
}

myFunction();

//funciones del tipo expresion, variable que guarda una funcion

var myFunction = function(a,b){
    return a+b
}

myFunction();


//esta funcion toma por parametro un nombre y lo muestra en consola
function greetingStudent(student){
    console.log(student)
}

function greetingStudent(student){
    console.log("hello" + student)
}

//tip

function value(secreto) {
    return secreto > 5
}

//esta funcion returna truee por defecto si el valor es mayor que 5, sino sera falsee 


//condicionales

if(true){
    console.log("Soy verdadero")
}else{
    console.log("Soy falso")
}


var name = "hugo"

if(name != "hugo"){
    console.log("no puedes entrar")
}else if(name === "pedro"){
    console.log("eres alto pato")
}else{
    console.log("telajeta")
}

//operador ternario -> condition ? true : false

var nam = "Pedro"

var compare = nam === "Hugo" ? "SI soy Hugo" : "No no soy Hugo"

console.log(compare)

//switch

var numero = 88

switch(numero){

    case 1: console.log("soy un 1");
    break;

    case 88: console.log("soy un 88 bien crazy");
    break;

    case 96: console.log("soy un 96");
    break;

    default: console.log("no soy ninguna monda");
    break;
}