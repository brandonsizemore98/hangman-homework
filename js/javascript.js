var charactersArray = ["Anakin", "Luke", "Vader", "Han", "Chewie", "R2D2", "C3P0", "Maul", "ObiWan", "Snoke"];
var characterSelected = "";
var lettersInCharacter = [];
var numberOfBlanks = 0;
var rightAndBlank = [];
var wrongGuess = [];

//all my counters
var losses = 0;
var guessesLeft = 9;
var wins = 0;

function gameStart() {

    guessesLeft = 9

    characterSelected = charactersArray[Math.floor(Math.random() * charactersArray.Length)];
    lettersInCharacter = characterSelected.split("");
    numberOfBlanks = lettersInCharacter.length;

    console.log(characterSelected);

    rightAndBlank = [];
    wrongGuesses = [];

    for (var i = 0; i < numberOfBlanks; i++) {
        rightAndBlank.push("_");
    }

    console.log(rightAndBlank);

    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("word-blanks").innerHTML = rightAndBlank.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuess.join(" ");
}

function lettersCheck(l) {
    var lettersInCharacter = false;

    for (var i = 0; i < numberOfBlanks; i++) {
        if (characterSelected[i] === l) {
            lettersInCharacter = true;
        }
    }

    if (lettersInCharacter) {
        for (var j = 0; j < numberOfBlanks; j++) {
            if (characterSelected[j] === l) {
                rightAndBlank[j] = l;
            }
        }
        console.log(rightAndBlank);
    } else {
        wrongGuesses.push(l);
        guessesLeft--;
    }
}

function gameDone() {
    console.log("Wins: " + wins + " | Losses: " + losses + " | numberOfGuesses: " + guessesLeft);

    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("word-blanks").innerHTML = rightAndBlank.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuess.join(" ");

    if (lettersInCharacter.toString() === rightAndBlank.toString()) {

        wins++;
        alert("You win!");

        document.getElementById("win-counter").innerHTML = wins;
        gameStart();
    } else if (guessesLeft === 0) {
        losses++;
        alert("You lose :(");

        document.getElementById("loss-counter").innerHTML = losses;
        gameStart();
    }

}

gameStart();

document.onkeyup = function(event) {
    var lettersGuessed = String.fromCharCode(event.which).toLowerCase();
    lettersCheck(lettersGuessed);
    gameDone();
}