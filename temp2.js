$(document).one("keypress", nextSequence)

var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["green", "red", "yellow", "blue"];
var level = 0

var started = false;



function nextSequence() {

    // increased level by one each time this function is called
    level += 1;
    $("#level-title").text("Level " + level);

    // generated a random number between 0 and 3 including 0 and 3
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);

    // chosen a random color from the color's list
    var randomChosenColor = buttonColors[randomNumber];
    console.log(randomChosenColor);

    // added randomly chosen last color at the last of the game pattern
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);

    // created a variable to access Id easily
    var randomChosenColorId = "#" + randomChosenColor

    // box flashed mechanism
    $(randomChosenColorId).css({ opacity: 0 });
    $(randomChosenColorId).animate({ opacity: 1 }, 500);

    // played a sound from the function for it by passing the color
    playSound(randomChosenColor);


    // detected button click and the id of that button
    $(".btn").on("click", function () {
        userChosenColor = $(this).attr("id");
        console.log(userChosenColor);

        userClickedPattern.push(userChosenColor);
        console.log(userClickedPattern);

        playSound(userChosenColor);
        animatePress(userChosenColor);

        // comparing answers
        checkAnswer(level - 1);
    });



}

// function to play sound
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// function to animate box after mouse clicking
function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed");
    setTimeout(function () {
        $("." + currentColor).removeClass("pressed");
    }, 200);
}

// checking answer by comparing the gamePattern and userClickedPattern
function checkAnswer(currentLevel) {
    for (var i = 0; i <= currentLevel; i++) {
        if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
            console.log("success");
            console.log(currentLevel);
            console.log(userClickedPattern[i]);
            console.log(gamePattern[i]);
            nextSequence();
        }
        else {
            console.log("wrong");
        }
    }
}

function startOver() {
    level = 0
    gamePattern = []
    nextSequence();
}

// nextSequence();

