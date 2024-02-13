var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;
var ind = 0;



$(document).on("keydown", nextSequence);


$(".btn").on("click", handlerFunction);



function handlerFunction(event){
    if(started == true){

        var userChosenColour = this.id;
        console.log(userChosenColour);
        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern);

        if(userClickedPattern[ind] !== gamePattern[ind]){
            gameOver();
        }else{
            if(ind + 1 == gamePattern.length){
                ind = 0;
                started = false;
                userClickedPattern = [];
                nextSequence();
            }else{
                ind++;
            }
        }

        playSound(userChosenColour);
        animatePress(userChosenColour);

    }
  
}




function nextSequence(){
    if(started === false){
        started = true;
        var randomNumber = Math.floor(Math.random()*4);
        var randomColorChoosen = buttonColors[randomNumber];
        gamePattern.push(randomColorChoosen);

        $("#" + randomColorChoosen).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(randomColorChoosen);
        level++;

        $("h1").text("Level " + level);
    }
    
}

function gameOver(){
    var audio = new Audio("./sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over!");
}



function playSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(name){
    $("." + name).addClass("pressed");
    setTimeout(() => {
        $("." + name).removeClass("pressed");
    }, 100);
}








