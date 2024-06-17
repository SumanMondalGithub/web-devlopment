let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

$(document).keydown(function () {
  if (!started) {
    $("#level-title").text(`level ${level}`);
    nextSequence();
    started = true;
  }
});

// this to to start over the game
function startOver() {
  level = 0;
  started = false;
  gamePattern = [];
}

// this is to check answer
function checkAnswer(currentLevel) {
  // Step 3: Check if the most recent user answer is the same as the game pattern
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");

    // Step 4: Check if they have finished their sequence
    if (userClickedPattern.length === gamePattern.length) {
      // Step 5: Call nextSequence() after a 1000 millisecond delay
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    let wrong = new Audio("sounds/wrong.mp3");
    wrong.play();

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over"), 200;
    });
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
    console.log("wrong");
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text(`leve ${level}`);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  let raudio = new Audio(`sounds/${randomChosenColor}.mp3`);
  raudio.play();
}

// when user click a button below this occurs
$(".btn").click(function () {
  userClickedPattern.push($(this).attr("id"));
  playSound($(this).attr("id"));
  animatePress($(this).attr("id"));
  checkAnswer(userClickedPattern.length - 1);
});

// this will play sound
function playSound(name) {
  $(".btn").click(function () {
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
  });
}

// this will animate button press
function animatePress(currentColor) {
  $(`.${currentColor}`).addClass("pressed");
  setTimeout(function () {
    $(`.${currentColor}`).removeClass("pressed"), 100;
  });
}
