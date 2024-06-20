$(document).one("keypress", nextSequence);

var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["green", "red", "yellow", "blue"];
var level = 0

function nextSequence() {

    level += 1;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    console.log("randomNumber " + randomNumber);

    var randomChosenColor = buttonColors[randomNumber];
    console.log("randomChosenColor " + randomChosenColor);

    gamePattern.push(randomChosenColor);
    console.log("gamePattern " + gamePattern);

    var randomChosenColorId = "#" + randomChosenColor

    $(randomChosenColorId).css({ opacity: 0 });
    $(randomChosenColorId).animate({ opacity: 1 }, 500);
    playSound(randomChosenColor);


    console.log(userClickedPattern);
    
    $(".btn").on("click", function () {
        userChosenColor = $(this).attr("id");
        console.log("userChosenColor " + userChosenColor);

        userClickedPattern.push(userChosenColor);
        console.log("userClickedPattern " + userClickedPattern);

        playSound(userChosenColor);
        animatePress(userChosenColor);

        // if (randomChosenColor == userChosenColor) {
        //     nextSequence();
        // }
    });

    checkAnswer(userClickedPattern.length - 1);

}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {

    $("." + currentColor).addClass("pressed");

    setTimeout(function () {
        $("." + currentColor).removeClass("pressed");
    }, 200);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success")
    } else {
        console.log("wrong");
    }

}

// nextSequence();

