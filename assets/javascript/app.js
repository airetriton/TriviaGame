
//timer stop_start






//score
var score = 0;

//correct answer
.btnSubmit.onclick = function() {
	var correctAnswer = document.getElementById("a2")
	if (correctAnswer.checked === true) {
		score ++;
		alert("Correct")
		} 

	else {
		alert("You Lose")	
	} 
}
console.log(correctAnswer)
 
//timer
 var myVar = setTimer(myCountdown,30000)

function myCountdown() {
    var d = new Date();
    document.getElementById(.Counter).innerHTML = d.toLocaleTimeString();
}