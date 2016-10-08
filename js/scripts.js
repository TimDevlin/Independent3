// Back-end Logic

var pandaOut = function(number) {
  var userNum = [];
  for (var index = 1; index <= number; index += 1) {
    if  (index % 15 === 0) {
     userNum.push("pingpong");
   } else if (index % 5 === 0) {
     userNum.push("pong");
   } else if (index % 3 === 0) {
     userNum.push("ping");
   }
    else {
      userNum.push(index);
    }
   }
  return userNum

});
}



// Front-end Logic

$(function() {
  $("form#Panda").submit(function(event) {
    event.preventDefault.();
    var number = parseInt($("input#number").val());
    var results = pandaOut(number);
    $("#result").text(result);
  });
});
