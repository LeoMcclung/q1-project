$(document).ready(function() {
    $('select').material_select();
  });

  // Function to generate a random integer between min & max (inclusive)
function randomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//    make sure max is numberOfItems-1 to ensure a valid array index


// Fetch items from the NASA images API

fetch('https://images-api.nasa.gov/search?keywords=galaxies&description=galaxy&center=jpl&media_type=image')
  .then(response => response.json())
  .then(body => {
    var numberOfItems = body.collection.items.length;
    var randomIndexItem = randomInteger(0, numberOfItems-1);
    var randomItem = body.collection.items[randomIndexItem];
    var randomImg = randomItem.links[0];

    document.body.style.backgroundImage = 'url("' + randomImg.href + '")';
    document.body.style.backgroundAttachment = 'fixed';
    
    
    // document.body.style.background = 'url("' + randomImg.href + '")';

    
    // Pull the thumbnail source from the item.links[0].href field
    // Update the document.body style background to the image url obtained above
    // console.log(randomImg)
  })
  .catch(e => console.error(e));


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

var correctAns1 = 1;
var correctAns2 = 1;
var correctAns3 = 5;

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