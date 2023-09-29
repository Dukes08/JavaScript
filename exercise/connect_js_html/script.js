const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const button = document.querySelector('#calcularsuma');
const result = document.querySelector('#resultado');


function buttonOnCl(){
    const suma = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = "este es el resultado " + suma; //innerText muestra en la pagina lo que le ingresemos
}