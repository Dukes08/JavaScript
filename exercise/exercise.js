function person(name,last_name,height,age){
    this.name = name;
    this.last_name = last_name;
    this.height = height;
    this.age = age;
}

let people = [];

function addPerson(name,last_name,height,age){
    let newP = new person(name,last_name,height,age);
    people.push(newP);
}


 for(let i =0; i<people.length; i++){
    console.log(`Esta es una persona ${people[i].name}`)
 }

let a = [1,2,3,4,5]

 function printArrayByNumber(arr){
    for(let i = 0; i <arr.length; i++){
       console.log(`este numero es ${arr[i]}`) 
    };
 }

 let person = {
    name: "Hugo",
    Apellido: "Duque",
    Edad: 19,
    Profesion: "Ing Sistemas",
 }

 //transformar un object en un array

 function imprimirObjeto(a){
    let arr = Object.values(a);
    for(let i = 0; i <arr.length; i++){
        console.log(`${arr[i]}`) 
     };
  }
 
//como automatizar un algoritmo sin la necesidad de usar muchos condicionales

const tipoDeSubs ={
    free: "Solo cursos gratis",
    expert: "Cursos por un anio",
    Duo: "Cusos para dos personas"
}

let options = "free";

//tipoDeSubs[options] -> esto compara el valor de la variable optios en los atributos del objeto e imprime su valor
//output "solo cursos gratis"

function subscrip(a){
    if(tipoDeSubs[a]){
        console.log(tipoDeSubs[a]); //imprime el mensaje dependiendo de la sub
        return;
    }
    console.warn("no existe esa subs") //sino hay una parecida en el objeto imprime el warning
}

