$(document).ready(function() {
    $('select').material_select();
  });


function countDown(i) {
    var int = setInterval(function () {
        document.getElementById("displayDiv").innerHTML = "" + i;
        i-- || clearInterval(int);
    }, 1000);

    if (i==0){

    }else {

    }
}
countDown(10);

function load() {
    window.location.href = "../result-page/index.html"
}


var questionOne = document.getElementById('q1')
var questionTwo = document.getElementById('q2')
var questionThree = document.getElementById('q3')

var correctAnswers = getAnswers()

function getAnswers(){
  questionOne.value();
  questionTwo.value();
  questionThree.value();

}

function quizResult() {

}