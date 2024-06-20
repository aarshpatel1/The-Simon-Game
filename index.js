// alert("Hello World")

var gamePattern = []
var userClickedPattern = []
var buttonColours = ["red", "blue", "green", "yellow"]


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);

    var randomChosenColour = buttonColours[randomNumber];
    console.log(randomChosenColour);

    gamePattern.push(randomChosenColour);
    console.log(gamePattern);

    randomChosenColourId = "#" + randomChosenColour
    $(randomChosenColourId).on("click", function () {
        $(randomChosenColourId).css({ opacity: 0 });
        $(randomChosenColourId).animate({ opacity: 1 }, 500);
        var audio = new Audio("sounds/" + randomChosenColour + '.mp3');
        audio.play();
    })

    $(".btn").on("click", function () {
        userClickedPattern.push($(this).attr("id"));
        console.log(userClickedPattern);
    })
    // $(randomChosenColourId).on("click", function () {
    //     $(randomChosenColourId).addClass("pressed");
    //     setTimeout(function () { $(randomChosenColourId).removeClass("pressed") }, 200);
    // })
}

nextSequence();