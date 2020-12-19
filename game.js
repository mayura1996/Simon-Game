buttonColours = ["red","blue","green","yellow"];
gamePattern=[];
userClickedPattern=[];

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern)
    playSound(userChosenColour);
 });

function nextSequence(){
  randomNumber = Math.floor(Math.random()*4);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}


nextSequence();
