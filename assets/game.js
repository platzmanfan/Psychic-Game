var pcLetter;

var wins = 0;

var losses = 0;

var guessLeft = 10;


var myGuess =[];
var pcLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


var randomLetter = pcLetter[Math.floor(Math.random() * pcLetter.length)];


var winsText = document.getElementById("wins");

var lossesText = document.getElementById("losses");

var guessText = document.getElementById("guessLeft");

var myGuessText = document.getElementById("myguesses");
    var randomLetter1 = function(){

      randomLetter =   pcLetter[Math.floor(Math.random() * pcLetter.length)];
      return randomLetter;
    };

    document.onkeydown = function(event){

    var userGuess = event.key.toUpperCase();
    
    myGuessText.append( userGuess.toUpperCase() + " , ");

    
        console.log(randomLetter);
    console.log(userGuess.toUpperCase());
    guessText.textContent = userGuess.toUpperCase();

    if (userGuess === randomLetter ){
        randomLetter1();
        wins++;
        winsText.textContent = wins;
        myGuessText.textContent = "";
        guessText.textContent = 9;
        guessLeft = 9;
       
    }
    else {
        guessLeft--
        guessText.textContent = guessLeft;
    }
    
    
    if (guessLeft < 1){
        randomLetter1();
        guessLeft = 9;
        guessText.textContent = 9;
        losses++;
        lossesText.textContent = losses;
        myGuessText.textContent = "";
        
    }
};