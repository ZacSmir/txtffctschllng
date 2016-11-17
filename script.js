var shown = true
setInterval(function() {
  if (shown) {
    $(".blinking").css({"visibility": "hidden"});
    shown = false;
  } else {		
    $(".blinking").css({"visibility": "visible"});
    shown = true;
  }
}, 300)


var lettersToFade = $(".by-letter-fade").children();
var index = 0
setInterval(function() {
  if (index >= lettersToFade.length) {
    index = 0
  }

  var letterToFade = $(lettersToFade[index]);

  letterToFade.animate({"opacity": "0"}, {
    complete: function() {
      letterToFade.animate({opacity: "1"})
    }
  }) 	

  index = index + 1
}, 500)

var customeffect = $(".custom-effect")

setInterval(function(){
customeffect.animate({fontSize: '750px'});
customeffect.animate({fontSize: '0px'});
}, 10)

