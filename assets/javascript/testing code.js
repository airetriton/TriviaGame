testing code.js

// function getTimeRemaining(endtime){
// 		var t = Date.parse(endtime) - Date.parse(new Date());
// 		var seconds = Math.floor( (t/1000) % 60 );
// 		var minutes = Math.floor( (t/1000/60) % 60 );
// 		var hours = Math.floor( (t/(1000*60*60)) % 24 );
// 		var days = Math.floor( t/(1000*60*60*24) );
// 		return {
// 		'total': t,
// 		'days': days,
// 		'hours': hours,
// 		'minutes': minutes,
// 		'seconds': seconds
// 		};
		
// 	}
// 		console.log(getTimeRemaining(deadline).days);
// 		getTimeRemaining(deadline).minutes;


// 	function initializeClock(id, endtime){
// 		var clock = document.getElementById("clockdiv");
// 		var timeinterval = setInterval(function(){
// 		var t = getTimeRemaining(endtime);
// 		clock.innerHTML = 'days: ' + t.days + '<br>' +
// 		                  'hours: '+ t.hours + '<br>' +
// 		                  'minutes: ' + t.minutes + '<br>' +
// 		                  'seconds: ' + t.seconds;
// 		if(t.total<=0){
// 		  clearInterval(timeinterval);
// 		}
// 		},1000);
// 	};

// 	initializeClock("clockdiv", deadline);


// 	// function initializeClock(id, endtime){
// 	// 	var clock = document.getElementById(id);
// 	// 	var daysSpan = clock.querySelector('.days');
// 	// 	var hoursSpan = clock.querySelector('.hours');
// 	// 	var minutesSpan = clock.querySelector('.minutes');
// 	// 	var secondsSpan = clock.querySelector('.seconds');
	  	
// 	//   	function updateClock(){
// 	// 		var t = getTimeRemaining(endtime);
// 	// 		daysSpan.innerHTML = ('0' + t.days).slice(-2);
// 	// 	    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
// 	// 	    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
// 	// 	    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
		  	
// 	// 	  	if(t.total<=0){
// 	// 	    clearInterval(timeinterval);
// 	// 	  }

// 	// 	updateClock(); // run function once at first to avoid delay
// 	// 	var timeinterval = setInterval(updateClock,1000);
// 	// 	}	
// 	// };

// 	initializeClock('clockdiv', deadline);


// 	// create clock to countdown
// 	function timeClock(){
// 		var timer = $("<div class='clockdiv' id='clockdiv'></div>"),
// 		// clockspan1 = $("<span class='days'></span>"),
// 		// clockspan2 = $("<span class='hours'></span>"),
// 		// clockspan3 = $("<span class='minutes'></span>"),
// 		// clockspan4 = $("<span class='seconds'></span>");
// 		$(".mainContainer").append(timer,[clockspan1, clockspan2, clockspan3, clockspan4 ] );		
// 	};	
// 	timeClock();








		// var startTime = new Date.getTime();
		// var x = setInterval(function() {
		// 	var now = startTime;
		// 	var distance = now - startTime;
		// 	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		// 	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		// 	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		// 	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		// 	document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

		// 	if (distance < 0) {
		// 	clearInterval(x);
		// 	document.getElementById("clockdiv").innerHTML = "Game Over";
		// 	};
		// }, 1000);
	// });
	// console.log(startTime);

	// var deadlineMinutes = 2;
	// var currentTime = Date.parse(new Date());
	// var deadlineFinal = new Date(currentTime + deadlineMinutes*60*1000);

	
	



	// function question(){
	// 	var displayQuestion
	// 	displayQuestion.attr("class", "")
	// }

	// function answer(){
	// 	var displayAnswer = $("<img>");
	// 	var image = newImage;
	// 	if 
	// 	displayAnswer.attr("input type", "radial")

	// }

// });


// 	$(".startBtn").on("click", function(event){
// 		createTriviaForm();
// 		timerTrivia();
// 	});

// 	function gameTimeOut (){
// 		wrongLoss++;
// 		message = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!";
// 		$("#header").html(message);
// 		setTimeout(wait, 10000);
// 		}

// 	function gameWin(){
// 		correctWin++;
// 		message = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You Win! You know a lot about dogs!";
// 		$("#header").html(message);
// 		setTimeout(wait, 5000);
		
// 	};	

// 	function gameLoss(){
// 		wrongLoss++;
// 		message = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You Lose.  Don't worry you'll do better next time.";
// 		$("#header").html(message);
// 		setTimeout(wait, 5000);

// 	}

// //  You'll create a trivia form with multiple choice or true/false options (your choice).
	
// 	function createTriviaForm (){
// 		// this will help loop through the array (remember to find your array words)

// 		for (i=0; i<questionsArray.length; i++){
// 			question = $("<p class = 'text-center</p>");
// 			$(".mainContainer").html(question);
			

// 			for(j=0; j<choices.length; j++){
// 			var answerBtn = $("<button>");
// 			answerBtn.addClass("text-center btn btn-primary btn-lg answer");
// 			answerBtn.text(choices[j]);
// 			$(".mainContainer").append(answerBtn);
// 			}

// 			$(".answer").on("click", function(event)){
// 				selectedAnswer = $(this).text();

// 				if(selectedAnswer === correctAnswer){
// 					triviaWin();
// 					clearInterval(timer);
// 				} else {
// 					clearInterval(timer);
// 					triviaLose();
// 				}
// 			}
// 		};
// 	};	

// 	function timerGame(){
// 		timer = setInterval(thirtySeconds, 1000);
// 		function thirtySeconds(){
// 			if(counter === 0){
// 				clearInterval(timer);
// 				gameTimeOut();
// 			}
// 			if (counter > 0){
// 				counter--;
// 			}
// 			$(".timer").html(counter);
// 		};
// 	};			

				


// 		};
// 		createTriviaForm();

// 		console.log(createTriviaForm);
			

			// var newContainerDiv = $(“<div>”);  //create new div
				// newContainerDiv.attr("index", i);  //add the index number
				// container.appendChild(newContainerDiv);
				// var innerDiv = document.createElement('div');//create div inside a div
				// innerDiv.className = "question"; //name that new div
				// newContainerDiv.appendChild(innerDiv); //append that div


				// var answerDiv = document.createElement('div');
				// answerDiv.className ="answer";
				// innerDiv.appendChild(answerDiv);

				// $(".mainContainer").append();


			//create, fill, add to page

			// this all takes place inside of the first for loop - container div create an index for the correct answer, question div (this would be an attribute), 
					//choices (with nested loop to run through them all), 
						//answer div (then another attribute)
			//all of these items would be appended and considered children
					


			//set attribute on container element for correctAnswer (ref index of the questions array)	

			// newContainerDiv.attr(“index”, i); 
			

			//then append to the game page (this should be the last thing that "runs")



		// };

		//function check the answers

		
		//function to display results on page
		//how to set the timer in js (google)
		//look for timeout method
		//set timer, when timer runs out, check results, display results (in this order)
		//create score variable, add this variable plus plus to (create event listener when someone clicks on a radial matches the correct answer)

		//reset everything without refreshing the page - call one method to clear everything out of the game and then if they want to play again add everything back in.  Do that on click event listeners.
		



	//holds a value - create a variable





// * The player will have a limited amount of time to finish the quiz. 

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.






















//timer stop_start






//score
// var score = 0;




// //correct answer
// .btnSubmit.onclick = function() {
// 	var correctAnswer = document.getElementByValue("correct")
// 	if (correctAnswer.checked === true) {
// 		score ++;
// 		alert("Correct")
// 		} 

// 	else {
// 		alert("You Lose")	
// 	} 
// }
// console.log(correctAnswer)
 
// //timer
//  var  Counter= setTimer(Counter,30000)


// function Counter() {
// 	$(.t)
//     var d = new Date();
//     document.getElementById(.Counter).innerHTML = d.toLocaleTimeString();
// }

// }