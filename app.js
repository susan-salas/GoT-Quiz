var game = {
    question: 0,
    '0': false,
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    score: 0
}

var question1 = {
    question: "Who created the White Walkers?",
    answers: ["a. The Children",
                       "b. The God of Light",
                       "c. The First Men",
                       "d. The Night's Watch"],
    correctAnswer: 0,
    answerCorrect: false
}
var question2 = {
    question: "The sigil of House Stark is the",
    answers: ["a. Golden Lion",
              "b. Three-headed Dragon",
              "c. Direwolf",
              "d. Black Stag"],
    correctAnswer: 2
}
var question3 = {
    question: "question3",
    answers: ["a. A3",
              "b. ",
              "c. ",
              "d."],
    correctAnswer: 2
}
var question4 = {
    question: "question4",
    answers: ["a.A4",
              "b. ",
              "c. ",
              "d."],
    correctAnswer: 3
}
var question5 = {
    question: "question5",
    answers: ["a. A5",
              "b. ",
              "c. ",
              "d."],
    correctAnswer: 3
}

var questionsArray = [question1, question2, question3, question4, question5];


function displayQuestions() {
    var questionBundle = questionsArray[game.question];
    $('.answer ul').empty();
    //display question
    $(".question").text(questionBundle.question);
    //display answer options
    for (i = 0; i < questionBundle.answers.length; i++) {
        var row = $('<li><input type="radio" id="radio1" name="RadioGroup1" value="' + i + '">' + questionBundle.answers[i] + '</input></li>');
        $('.answer ul').append(row);
    }

}

function updateFeedback() {
    var answersCorrect = 0;
    $('.answer-feedback').empty();
    //loop through answers given
    for (i = 0; i < game.question; i++) {
        if (game[i]) {
            var row = $('<li>Question ' + (i + 1) + ' correct</li>');
            $('.answer-feedback').append(row);
            answersCorrect++;
        } else {
            console.log("you got this wrong");
            var row = $('<li>Question ' + (i + 1) + ' wrong</li>');
            $('.answer-feedback').append(row);
        }
    }
    $('.total-score').text(answersCorrect + "/5");

}

function checkAnswer(answer) {

    var question = questionsArray[game.question];
    var num = game.question;

    console.log(num);
    if (answer == question.correctAnswer) {
        game[num] = true;
    } else {
        game[num] = false;
    }
    game.question++;
    updateFeedback();
}

function finalresults() {
    alert("you've reached the end");
}

function startOver() {

}

$(document).ready(function () {
    var indexOfAnswer;

    displayQuestions();

    $('.submit').click(function () {

        indexOfAnswer = $("input[name=RadioGroup1]:checked").val();

        checkAnswer(indexOfAnswer);
        console.log(game.question);
        if (game.question < 5) {
            displayQuestions();
        }
        if (game.question == 5) {
            finalresults();
        }

    });
});
