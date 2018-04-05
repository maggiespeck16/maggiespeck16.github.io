$(document).ready(function() {

	setTimeout(function(){
    $(".wake-up-text").addClass("alarming"); 
    $("body").addClass("alarming");
  }, 5000);

  $(".button").click(function() { 
    $(".wake-up-text").removeClass("alarming");
    $("body").removeClass("alarming");
  });
  
  setInterval(function() {
    var time = new Date();
    var hour = time.getHours() % 12;
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    $(".hours").css("background-color", "rgb(" + hour*10 + ", 104, 255)");
    $(".minutes").css("background-color", "rgb(" + minutes*4 + ", 255, 149)");
    $(".seconds").css("background-color", "rgb(" + seconds*4+ ", 215, 196)");

     $(".seconds").css("left", seconds +"vw"); 
     $(".minutes").css("left", minutes +"vw");
     $(".hours").css("left", hours +"vw");

  }, 1000);
});


