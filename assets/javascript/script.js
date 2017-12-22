// Program Pseudocode
// Need to record userInput based on a keypress event.
// Store user input in an array.
// Need to make a nested array  that holds questions and answers.
// Create a random number generator to get a random nested array via an array index.
// Need to compare the user input to the answer  and place corresponding inputs to the values - 
//      position in the DOM
// When all values are met we will reroll a new random question/answer array.
// Need to keep track of the number of guesses a user has and decrement if an input is incorrect.
// If the number of guesses == 0 give the user the answer and select a new question/answer pair.
// Create a (SKIP) button followed by a Confirm statement to allow the user to skip a question -
//      could also add an option for the user to see the answer of a skipped question.



// Create a skip button with a confirm if the user wants to skip or continue current. 


// Declare Vars
var userInput;
var userInputArray = [];
var guessesString;
var guessesArray = [];
var guessesLeft = 6;
var questionsAndAnswers = [
    ["Year Lebron James was drafted?", "2003"],
    ["First player to average a triple double?", "OscarRobertson"],
    ["Mascot name of the Charlotte Hornets?", "hugo"],
    ["What number was Michael Jordan Drafted?", "two"],
    ["Who won the NBA Championship in 2008", "celtics"]
]
var randomArrayIndex;
var answer;
var answerString;
var answerArray = [];
var answerInput;
answerInput = answerArray.join("");
var winCount = 0;
var lossCount = 0;
var image;



getRandomQuestion();
underscores();
document.addEventListener("keypress", function() {
    storeUserInput();
    inputConditions();
    reset();
    })




function storeUserInput() {
    userInput = event.key;
    userInputArray.push(userInput);
    console.log(userInput);
}

function getRandomQuestion() {
    randomArrayIndex = questionsAndAnswers[Math.floor(Math.random() * questionsAndAnswers.length)];
    answer = randomArrayIndex[1].toLowerCase();
    var questionText;
    var questionText = document.getElementById("question").innerHTML = randomArrayIndex[0] + "\n Number of Inputs: " + answer.length;
}

function underscores(){
    for(var i = 0; i < answer.length; i++) {
        answerArray[i] = "_";
    }
    answerString = answerArray.join(" ");
    document.getElementById("answer").innerHTML = answerString;
}

function inputConditions() {
    if(answer.includes(userInput)){
        for(var i = 0; i < answer.length; i++) {
            if(answer[i] == userInput) {
                answerArray[i] = userInput;
            }
        }
        document.getElementById("answer").innerHTML = answerArray.join(" ");
    } else if(guessesArray.indexOf(userInput) == -1) {
        guessesLeft--;
        document.getElementById("guesses-left").innerHTML = guessesLeft;
        guessesArray.push(userInput);
        guessesString = guessesArray.join(" ");
        document.getElementById("guesses").innerHTML = guessesString;
    }
}

function reset(){
    if(answerArray.join("") == answer) {
        getRandomQuestion();
        answerArray = [];
        underscores();
        viewReset();
        winCount++;
        document.getElementById("win").innerHTML = winCount;
        switch(answer) {
            case "2003":
                console.log("Lebron James Gif Plays");
                break;
        }
        // document.getElementById("win-image").setAttribute("src", "data:image/jpeg;base64,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")
    } else if(guessesLeft === 0) {
        getRandomQuestion();
        answerArray = [];
        underscores();
        viewReset();
        lossCount++;
        document.getElementById("loss").innerHTML = lossCount;
    }
}



function viewReset() {
    guessesArray = [];
    guessesString = guessesArray.join(" ");
    guessesLeft = 6;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("guesses").innerHTML = guessesString;
}

// this line manipulates the HTML image
// document.getElementById("win-image").setAttribute("src", "");


switch(randomArrayIndex[1].toLowerCase) {
    case "2003":
        console.log("Lebron James Gif Plays");
        break;
}


