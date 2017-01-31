                          // 201701310918L   EL MARTES   GIRO
                          //SETFOCUS TO THE FIRST FIELD SO I DONT HAVE TO CLICK IN IT
                          // $("#playerOnesWord").focus(function(){ $("span").css("display", "inline").fadeOut(2000); });

$(document).ready(function() {    //console.log("Hangman Game");
});

var btnWord = $("#btnWord");
var inputWord = $("#inputWord");
var theWord;
var arrTheWord;
var btnGuess = $("#btnGuess");
var inputGuess = $("#inputGuess");

btnWord.on('click', function(event) {
  event.preventDefault();
          								//console.log("in click handler btnWord");
          								//console.log(inputWord.val());
  theWord = inputWord.val();
          								//console.log("heres theWord:" + theWord);
  arrTheWord = theWord.split(/(?!$)/);
                           //this works: //"overpopulation".split(/(?!$)/)
          								//console.log("heres arrTheWord:" + arrTheWord);
  fillVannaWhite();
});

function fillVannaWhite() {
                  								//console.log('filling in Vanna');
  theWordCss = $("#theWord");
  for (i = 0; i < arrTheWord.length; i++) {
    var thisLetter = arrTheWord[i];                  								//console.log('thisLetter:' + thisLetter);

    var div = $('<div id="div' + i + '"  class="thisGuess" > ' + thisLetter + ' </div>');

    theWordCss.append(div);
  }
}

btnGuess.on('click', function(event) {
  event.preventDefault();
                  								//console.log(inputGuess.val());
  thisGuess = inputGuess.val();
  comparo(thisGuess);
});
var arrTheWordSoFar = [];

function comparo(thisGuess) {
                                  //THIS IS CASE-SENSITIVE
                  								//console.log('in comparo with the guess: ' + thisGuess);
                  								//console.log('thisWord: ' + theWord);
                  								//console.log('thisGuess:' + thisGuess);
  if ($.inArray(thisGuess, arrTheWord) !== -1) {
            								      //console.log('thisGuess:' + thisGuess + ' is in thisWord: ' + theWord);
            								      //loop over array finding all the instances of the current character
            								      //console.log("Length of arrTheWord: " + arrTheWord.length);
    for (i = 0; i < arrTheWord.length; i++) {
                  								//console.log("i: " + i);
                  								//console.log("char: " + arrTheWord[i]);
      if (arrTheWord[i] === thisGuess) {
                								  //console.log("Found " + thisGuess + " at index " + i);
        id = "#div" + i;
                								  //console.log("div id: " + id);
        matchDiv = $(id);
                								  // if (matchDiv)   //console.log("we have the matching div");
        matchDiv.css({
          'background-color': '#ff0000',
          'color': '#ffffff'
        });
        var numbers = new Set([1, 2]); // Set {1, 2, 4}
                								  //console.log(numbers);
        numbers.add(4);           // Set {1, 2, 4}
                								  //console.log(numbers);
        numbers.add(6);           // Set {1, 2, 4, 6}
                								  //console.log(numbers);
        arrTheWordSoFar.push(thisGuess);
                								  //console.log("heres arrTheWordSoFar:" + arrTheWordSoFar);
                								  //console.log("heres arrTheWordSoFar:" + arrTheWordSoFar.indexOf(i));
                								  //check if lengths are different
        if (arrTheWord.length != arrTheWordSoFar.length) {
                  								console.log("aint no winner yet");
        } else {
                  								console.log("ding ding ding");
        }
      }
    }                             //$('#thisGuess').append('+');    //console.log('were on div: ' + i);
  } else {
                								  //console.log('keep trying suckah');
  }
}
