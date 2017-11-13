


var counter = 120;
var question;
var selectedAnswer;
var wrongLoss;
var correctWin;

$(document).ready(function() {
	
	//insert header text into header

	function headerText() {
		$(".header").append("<h1> Welcome to the World of Dogs Trivia </h1>");
		$(".header").append("<h3> Answer the Questions Before Time Runs Out </h3>");
	};

	headerText();
	
	//create the button to start the game and put it into the header

	function headingBtn() {
		var startGame = $("<div id='begin'></div>"),
		newButton = $("<button class='btn btn-lg startBtn'>Start</button>");
		$(".header").append(startGame,[newButton]);
		
		console.log(headingBtn);
	};

	headingBtn();

	// create clock to countdown
	function timeClock(){
		var timer = $("<div class='clockdiv' id='clockdiv'></div>");
		$(".header").append(timer);		
	};	
	timeClock();
	
	$(".startBtn").on("click", function(){

		var countDown = setInterval(function() {
     		counter--;

      		if (counter >= 0) {
		    	document.getElementById("clockdiv").innerHTML =counter + ' seconds'; 
      			}
	      	if (counter === 0) {
	        	clearInterval(countDown);
	        	document.getElementById("clockdiv").innerHTML = "Sorry, You Ran Out Of Time";
		       }
	     }, 1000);
	});

	console.log(questionArray);
	console.log(questionArray[0].question);
	console.log(questionArray[0].choices);
	console.log(questionArray[0].correctAnswer);

	
	var airedale = "../images/airedalepup.jpg";

	$(".startBtn").on("click", function(){

		function triviaHTML() {
			for (i=0; i < questionArray.length; i++){
			question = $("<p class = 'text-center</p>");
			$(".mainContainer").append(question);
			

			for(j=0; j<(questionArray[i].choices).length; j++){
			var answerBtn = $("<button>");
			answerBtn.addClass("text-center btn btn-primary answerBtn");
			answerBtn.text(questionArray[i].choices[j]);
			$(".mainContainer").append(answerBtn);
			};

			$(".answer").on("click", function(event) {
				selectedAnswer = $(this).text();

				if(selectedAnswer === correctAnswer){
					triviaWin();
					clearInterval(timer);
				} else {
					clearInterval(timer);
					triviaLose();
				};
			});
		};
		};		
					
		triviaHTML();
	});



}); //end of document.ready function