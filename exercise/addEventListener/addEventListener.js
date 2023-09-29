const ope1 = document.querySelector('#operacion1');
const ope2 = document.querySelector('#operacion2');
const btn = document.querySelector('#resultado');
const sr = document.querySelector('#showR');

btn.addEventListener('click', buttonOnCl); //conecta lo que quiero escuchar de mi usuario a javas sin tener codigo en el html

function buttonOnCl(){
    const suma = parseInt(ope1.value) + parseInt(ope2.value);
    sr.innerText = "Resultado " + suma; //innerText muestra en la pagina lo que le ingresemos
}