$(document).ready(function() {
    $('select').material_select();
  });


function countDown(i) {
    var int = setInterval(function () {
        document.getElementById("displayDiv").innerHTML = "" + i;
        i-- || clearInterval(int);
    }, 1000);
}
countDown(10);

var el = document.getElementById("quiz");
el.addEventListener("submit", userInput, false);



var questionOne = document.getElementById('q1')
var questionTwo = document.getElementById('q2')
var questionThree = document.getElementById('q3')

var correctAns1 = 3;
var correctAns2 = 1;
var correctAns3 = 2;

function userInput(){
 var choice1 = questionOne.value;
 var choice2 = questionTwo.value;
 var choice3 = questionThree.value;
}

// function quizResult(){
//     if (choice1===correctAns1, choice2===correctAns2, choice3===correctAns3){

//     }
// }