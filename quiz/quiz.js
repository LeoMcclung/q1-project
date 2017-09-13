function countDown(i) {
    var int = setInterval(function () {
        document.getElementById("displayDiv").innerHTML = "" + i;
        i-- || clearInterval(int);  //if i is 0, then stop the interval
    }, 1000);
}
countDown(10);

