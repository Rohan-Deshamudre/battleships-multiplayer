$(document).ready(function(){
    
    function game(id, player1, player2, player1Info, player2Info) {
        // id of the game
        this.id = id;
        //Player Name
        this.player1 = player1;
        this.player2 = player2;

        // Array that holds information about the user
        this.player1Info = player1Info;
        this.player2Info = player2Info;
    }

    //Checks if the game needs to continue or has ended(P1 / P2 has won)
    function gameState(board1, board2) {
        var exitStatus = 0;
        //Return 0, if No one has won (User Left)
        //Return 1 if Player1 has won
        //Return 2 if Player2 has won
        var value = true;

        //Evaluates if there is a ship still standing in board1
        for(var i = 0; i <board1.length; i++){
            if(board1[i].indexOf(1) != -1){
                value = false;
                break;
            }
        
        }

        if(value){
            exitStatus = 1;
            return exitStatus;
        }

        value = true;

        //Evaluates if there is a ship still standing in board2 
        for(var i = 0; i <board2.length; i++){
            if(board2[i].indexOf(1) != -1){
                value = false;
                break;
            }
        
        }

        if(value){
            exitStatus = 2;
            return exitStatus;
        }

        return exitStatus;
    };

    var board1 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]] 


    var board2 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]


                //Checks the state of the game

    //Creates a new game (When all the information is available)
    //new game();

    //Function that starts the game
    //gameStart(id);

    function start(game){

        //If player 2 is a computer (Single Player)
        if(game.player2 == "Computer"){
                            
        }else if(game.player2 != "Computer"){
            //If player 2 is an online Player 
                
        }

    }

    $("#finishedYes").click(function(){
        window.open("Game.html", "_blank");
    });

    
});
