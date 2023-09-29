
var rock = "rock"
var scissors = "scissors"
var paper = "paper"

function game(user1,user2){
    switch(true){

        case(user1 === user2): console.log(tied);
        break;
    
        case(user1 == "rock" && user2 == "scissors"): console.log("player 1 wins");
        break;
    
        case(user1 == "paper" && user2 == "rock"): console.log("player 1 wins");
        break;
    
        case(user1 == "scissors" && user2 == "paper"): console.log("player 1 wins");
        break;
    
       default:
        console.log("player 2 wins");
        break;
    }
}
