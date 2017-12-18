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
var guessesLeft = 6;
var dashes;
var questionsAndAnswers = [
    ["Year Lebron James was drafted?", "2003"],
    ["First player to average a triple double?", "OscarRobertson"],
    ["Mascot name of the Charlotte Hornets?", "Hugo"],
    ["What number was Michael Jordan Drafted?", "Two"],
    ["Who won the NBA Championship in 2008", "Celtics"]
]
var randomArrayIndex = questionsAndAnswers[Math.floor(Math.random() * 5)];
var answer; randomArrayIndex[1];
var answerLength = randomArrayIndex[1].length;
var dashes = "- ".repeat(answerLength);
var answer; randomArrayIndex[1];


// indexOf(the correct letter) + 1



// var question1 = questionsAndAnswers[0];
// var firstProperty = Object.keys(question1)[0];

document.getElementById("question").innerHTML = randomArrayIndex[0];
document.getElementById("answer").innerHTML = dashes;
document.addEventListener("keypress", function() {
    storeUserInput();
    randomQuestion();
    answerDashes();
    for(var i = 0; i < answer.length; i++) {
        if(userInput === answer.indexOf(i)) {
            userInput.replace()
        }
    }






})

// Record user input and store it to an array
function storeUserInput() {
    userInput = event.key;
    userInputArray.push(userInput);
    console.log(userInput);
}

// create a random number gen to get a random nested array
function randomQuestion() {
    randomArrayIndex = questionsAndAnswers[Math.floor(Math.random() * 5)];
    if(guessesLeft === 0) {
        document.getElementById("question").innerHTML = randomArrayIndex[0];     
    }
}

// create a function to output the correct number of string spaces as dashes to match the 
//      the number of letters in the answer.
function answerDashes() {
    document.getElementById("answer").innerHTML = dashes;
}


