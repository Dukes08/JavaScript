var papel = "papel"
var piedra = "piedra"
var tijeras = "tijeras"

function game(plyr1, plyr2){
    if(plyr1 == tijeras && plyr2 == papel ){
        console.log("El jugador 1 gano ")
    } else if(plyr1 == piedra && plyr2 == tijeras){
        console.log("el jugador 1 gano")
    }else if(plyr1 == papel && plyr2 == piedra){
        console.log("el jugador 1 gano")

    }else if(plyr1 == piedra && plyr2 == papel){
        console.log("el jugador 2 gano")
    }else if(plyr1 == tijeras && plyr2 == piedra){
        console.log("el jugador 2 gano")
    }else if(plyr1 == papel && plyr2 == tijeras){
        console.log("el jugador 2 gano")
    }

}

/* les enviamos parametros a las funciones cuando las creamos y 
argumentos cuando las ejecutamos
 */

