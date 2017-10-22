
var questionArray = [
		{
			question: "As determined by the American Kennel Club, what is the most popular dog breed?", 
			choices: ["Golden Retreiver", "Labrador", "German Shepherd", "Border Collie", "Chihuahua"]
			correctAnswer: "Labrador"
		},
		
		{
			question: "How many US Presidents have had dogs in the White House?", 
			choices: ["32", "27", "16", "39", "45"]
			correctAnswer: "27"
		},

		{
			question: "About how many dogs are in the world?", 
			choices: ["400 million", "250 million", "600 million", "750 million"]
			correctAnswer: "400 million"
		},

		{
			question: "What animal can dogs be traced back to?", 
			choices: ["Miacis", "Barbaturex", "Lorises", "Chiropetra", "Bonobo"]
			correctAnswer: "Miacis"
		},

		{
			question: "Human have unique fingerprints, what is a dog's unique identifier?", 
			choices: ["Paw print", "Bark", "Nose print", "Tongue print", "Bite map"]
			correctAnswer: "Nose print"
		},

		{
			question: "How many eyelids do dogs have?", 
			choices: ["Four", "Three", "Two", "One"]
			correctAnswer: "Three"
		},

		{
			question: "Who owned the most dogs in history?", 
			choices: ["Kublai Kahn", "King of Norway", "Salvador Dali", "Pope Leo X", "Josephine Bonaparte"]
			correctAnswer: "Kublai Kahn"
		},

		{
			question: "Which breed of dog is completely white at birth?", 
			choices: ["Airedale Terrier", "Weimaraner", "Siberian Huskies", "Dalmations"]
			correctAnswer: "Dalmations"
		},

		{
			question: "What dog breed is known for its bluish-black tongue?", 
			choices: ["Akita", "Chow-Chow", "Akbash", "Ibzian Hound"]
			correctAnswer: "Dalmations"
		},
		
		{
			question: "Which breed of dog is completely white at birth?", 
			choices: ["Airedale Terrier", "Weimaraner", "Siberian Huskies", "Dalmations"]
			correctAnswer: "Dalmations"
		},
	};

var timer;
var counter = 60;
var selectedAnswer;
var startGame;


//create the button to start the game and put it into the header

	function headingBtn() {
		startGame = $("<button>");
		startGame.addClass("text-center btn btn-primary btn-lg");
		startGame.text("Start");
		$("#header").html(startGame);
	};

//  You'll create a trivia form with multiple choice or true/false options (your choice).

	// use id when narrowing to one, use a class to apply to a whole bunch of things.
	//push an array, append an element (divs, buttons, ptags are virtual elements)

	
	//when u see a do - write a function for the form (performs an action (verb))
	function createTriviaForm (){
		// this will help loop through the array (remember to find your array words)

		for (i=0; i<questionsArray.length; i++){
			question = $("<p class = 'text-center</p>");
			$(".mainContainer").html(question);
			

			for(j=0; j<choices.length; j++){
			var answerBtn = $("<button>");
			answerBtn.addClass("text-center btn btn-primary btn-lg answer");
			answerBtn.text(choices[j]);
			$(".mainContainer").append(answerBtn);
			}

			$(".answer").on("click", function(event)){
				selectedAnswer = $(this).text();

				if(selectedAnswer === correctAnswer){
					triviaWin();
					clearInterval(timer);
				} else {
					clearInterval(timer);
					triviaLose();
				}
			}
		};
	};	

				

				


		};
		createTriviaForm();

		console.log(createTriviaForm);
			

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

			newContainerDiv.attr(“index”, i); 
			

			//then append to the game page (this should be the last thing that "runs")



		};

		//function check the answers

		$
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
