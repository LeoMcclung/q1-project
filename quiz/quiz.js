$(document).ready(function() {
    $('select').material_select();
  });


function countDown(i) {
    var int = setInterval(function () {
        document.getElementById("displayDiv").innerHTML = "" + i;
        i-- || clearInterval(int);  //if i is 0, then stop the interval
    }, 1000);
}
countDown(10);

// element = document.getElementsByTagName('option')



function correctAnswers(){
    var element = document.getElementsByTagName('option');

    element[1].innerText = answerOne;
}