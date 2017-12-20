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
var randomArrayIndex = questionsAndAnswers[Math.floor(Math.random() * 5)];
var answer = randomArrayIndex[1].toLowerCase();
var answerString;
var answerArray = [];
var questionText = document.getElementById("question").innerHTML = randomArrayIndex[0] + "\n Number of Inputs: " + answer.length;
// var userInputString = userInputArray.toString().replace(/,/g, "");




questionText;
underscores();
document.addEventListener("keypress", function() {
    userInput = event.key;
    getRandomQuestion();
    inputConditions();



})



// Record user input and store it to an array
function storeUserInput() {
    userInput = event.key;
    userInputArray.push(userInput);
    console.log(userInput);
}

// create a random number gen to get a random nested array
function getRandomQuestion() {
    randomArrayIndex = questionsAndAnswers[Math.floor(Math.random() * 5)];
    if(guessesLeft === 0) {
        document.getElementById("question").innerHTML = randomArrayIndex[0];     
    }
}

// Creates underscores based on the answer length
function underscores(){
    for(var i = 0; i < answer.length; i++) {
        answerArray[i] = "_";
    }
    answerString = answerArray.join(" ");
    document.getElementById("answer").innerHTML = answerString;
}

// Creates logic on if the user input is within the answer or not
function inputConditions() {
    if(answer.includes(userInput)){
        for(var i = 0; i < answer.length; i++) {
            if(answer[i] == userInput) {
                answerArray[i] = userInput;
            }
        }
        document.getElementById("answer").innerHTML = answerArray.join(" ");
    } else {
        guessesLeft--;
        document.getElementById("guesses-left").innerHTML = guessesLeft;
        guessesArray.push(userInput);
        guessesString = guessesArray.join(" ");
        document.getElementById("guesses").innerHTML = guessesString;
    }
}