$(document).ready(function() {
    $('select').material_select();
  });


function countDown(i) {
    var int = setInterval(function () {
        document.getElementById("displayDiv").innerHTML = "" + i;
        i-- || clearInterval(int);
        if (i==0) {
            quizResult()
        }
    }, 1000);
}
countDown(20);

var questionOne = document.getElementById('q1')
var questionTwo = document.getElementById('q2')
var questionThree = document.getElementById('q3')

var correctAns1 = 3;
var correctAns2 = 2;
var correctAns3 = 2;

function quizResult(){
 var choice1 = questionOne.value;
 var choice2 = questionTwo.value;
 var choice3 = questionThree.value;

    if (choice1==correctAns1 && choice2==correctAns2 && choice3==correctAns3) {
        window.location.href = "../win/index.html"
    }else {
        window.location.href = "../fail/index.html"
    }
}

// var questions = [
//     {
//         q:
//     },
//     {
//         q:
//     }
// ];