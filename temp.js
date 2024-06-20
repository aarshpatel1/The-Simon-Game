// alert("hello");

$(document).one("keypress", nextSequence);

var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["green", "red", "yellow", "blue"];
var level = 0

function nextSequence() {

    level += 1;
    // console.log("hello");
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);

    var randomChosenColour = buttonColours[randomNumber];
    console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);

    // console.log($("#" + randomChosenColour));

    var randomChosenColourId = "#" + randomChosenColour
    $(randomChosenColourId).on("click", function () {
        $(randomChosenColourId).css({ opacity: 0 });
        $(randomChosenColourId).animate({ opacity: 1 }, 500);
        playSound(randomChosenColour);
    });

    $(".btn").on("click", function () {
        console.log(this);

        userChosenColour = $(this).attr("id");
        console.log(userChosenColour);
        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern);

        playSound(userChosenColour);

    })

}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress() {
    $("#green").on("click", function () {
        $(this).addClass("pressed");
        setTimeout(function () {
            $(this).removeClass("pressed");
        }, 100);
    })
}

// nextSequence();

