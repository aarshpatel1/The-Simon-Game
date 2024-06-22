var userClickedPattern = []
var gamePattern = []

var buttonColors = ["green", "red", "yellow", "blue"]

var started = false
var level = 0

// $(document).one("keypress", nextSequence)

$(document).on("keypress", function () {
    if (started != true) {
        nextSequence()
        started = true
    }
})

// detected button click and the id of that button
$(".btn").on("click", function () {
    userChosenColor = $(this).attr("id")
    // console.log(userChosenColor)

    userClickedPattern.push(userChosenColor)
    // console.log(userClickedPattern)

    playSound(userChosenColor)
    animatePress(userChosenColor)

    // matching pattern
    checkAnswer(userClickedPattern.length - 1)
})

// checking answer by comparing the gamePattern and userClickedPattern
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        // console.log("success")
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence()
            }, 1000)
        }
    } else {
        // console.log("wrong")

        // showing that game over
        playSound("wrong")
        $("body").addClass("game-over")
        setTimeout(function () {
            $("body").removeClass("game-over")
        }, 200)

        $("#level-title").text("Game Over, press any key to restart the Game. You have reached " + level + " level.")
        startOver()
    }
}

function nextSequence() {

    // reseting userClickedPattern for checking the new currect sequence 
    userClickedPattern = []

    // increased level by one each time this function is called
    level += 1
    $("#level-title").text("Level " + level)

    // generated a random number between 0 and 3 including 0 and 3
    var randomNumber = Math.floor(Math.random() * 4)
    console.log(randomNumber)

    // chosen a random color from the color's list
    var randomChosenColor = buttonColors[randomNumber]
    console.log(randomChosenColor)

    // added randomly chosen last color at the last of the game pattern
    gamePattern.push(randomChosenColor)
    console.log(gamePattern)

    // created a variable to access Id easily
    var randomChosenColorId = "#" + randomChosenColor

    // box flashed mechanism
    $(randomChosenColorId).css({ opacity: 0 })
    $(randomChosenColorId).animate({ opacity: 1 }, 500)

    // played a sound from the function for it by passing the color
    playSound(randomChosenColor)

}

// function to play sound
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play()
}

// function to animate box after mouse clicking
function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed")
    setTimeout(function () {
        $("." + currentColor).removeClass("pressed")
    }, 100)
}

// reseting the variables to restart the game
function startOver() {
    level = 0
    gamePattern = []
    started = false
}