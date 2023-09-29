//de la siguiente manera declaramos un objeto
var miAuto = {
    marca: "toyota",
    modelo: "corolla",
    annio: 2023,

};


//para traer un valor en especifico de un objeto se hacer lo siguiente

//buscar la marca

miAuto.marca

//agregar un metodo a un objecto 

var miAuto = {
    marca: "toyota",
    modelo: "corolla",
    annio: 2023,
    detalleDelAuto: function(){
        console.log(`Auto ${this.marca} ${this.annio}`)
    }

};


//funciones constructoras, es decir la plantilla de objetos para no tener que replicarlos cada vez que se necestie

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("ferrari","sf90", 2023);

//filtrar objetos de un array

var articulos = [
    {name: "gun", cost: 250},
    {name: "powder", cost: 150},
    {name: "big", cost: 650},
    {name: "boat", cost: 1000},
    {name: "car", cost: 2250},
];

var filtrado = articulos.filter(function(articulo){
    return articulo.cost <= 500;
});


//mapear un arrray de objetos

var mapeo = articulos.map(function(articulo){
    return articulo.name;
});

//encontrar un articulo en particular en un array 

var encontrar = articulos.find(function(articulo){
    return articulo.name === "boat";
});


