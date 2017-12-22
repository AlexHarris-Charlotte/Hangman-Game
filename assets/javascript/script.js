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
        gifGenerator();
        getRandomQuestion();
        answerArray = [];
        underscores();
        viewReset();
        winCount++;
        document.getElementById("win").innerHTML = winCount;
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


function gifGenerator() {
    switch(answer) {
        case "2003":
        document.getElementById("win-image").setAttribute("src","https://media0.giphy.com/media/3o7aTp7JTuH7Gq0wZq/200.gif#39-grid1")
            break;
        case "two":
        document.getElementById("win-image").setAttribute("src","https://media0.giphy.com/media/l46CqLVMWzaJUFPLW/200.gif#1-grid1")
            break;
        case "oscarrobertson":
        document.getElementById("win-image").setAttribute("src","https://media.giphy.com/media/ey4n1uHjW9NDi/giphy.gif")
            break;
        case "celtics":
        document.getElementById("win-image").setAttribute("src","https://media.giphy.com/media/3ogwG6tSdxbFc3RaFy/200.gif#42-grid1")
            break;
        case "hugo":
        document.getElementById("win-image").setAttribute("src","https://media0.giphy.com/media/l0Iy8vkimrfQAUc6s/200.gif#5-grid1")
            break;
        default:
        document.getElementById("win-image").setAttribute("src","https://media.giphy.com/channel_assets/nba/lMqp6CIVv9Lc.GIF")
    }
}


