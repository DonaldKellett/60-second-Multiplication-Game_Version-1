/*
 * game.js
 * 60-second Multiplication Game (Version 1)
 * Copyright (c) Donald Leung.  All rights reserved.
 */

var timeInSeconds = 60;
var numOne,
	numTwo,
	answer,
	totalQuestions,
	questionsCorrect,
	playerAnswer;

function initialize() {
	numOne = Math.round(25 * Math.random());
	numTwo = Math.round(25 * Math.random());
	answer = numOne * numTwo;
	totalQuestions = 0;
	questionsCorrect = 0;
	document.getElementById("numOne").innerHTML = numOne;
	document.getElementById("numTwo").innerHTML = numTwo;
}

function startTimer() {
	timeInSeconds -= 1;
	document.getElementById("timer").innerHTML = "Time Remaining: " + timeInSeconds + " seconds";
	if (timeInSeconds < 0) {
		document.getElementById("timer").innerHTML = "TIME'S UP!";
		document.getElementById("gameWindow").innerHTML = "<h2 style='font-size: 4em; font-weight: bolder;'>You scored " + questionsCorrect + " out of " + totalQuestions + "!  Good job!</h2>";
		document.getElementById("script-wrapper").innerHTML = "<!-- Script successfully deleted -->";
					}
	setTimeout("startTimer()", 1000);
}

function startGame() {
	document.getElementById("horizontalRule").style.display = "block";
	document.getElementById("gameWindow").style.display = "block";
	startTimer();
	disableStartButton();
	initialize();
}

function disableStartButton() {
	document.getElementById("startButton").style.display = "none";
}

//Donald i just made it have the ability to press enter to submit your answer
window.onkeypress = function(event) {
   if (event.keyCode == 13) {
      verify();
   }
}

function verify() {
	if (timeInSeconds >= 0) {
		playerAnswer = document.getElementById("playerAnswer").value;
		if (playerAnswer === answer.toString()) {
			totalQuestions++;
			questionsCorrect++;
			numOne = Math.round(25 * Math.random());
			numTwo = Math.round(25 * Math.random());
			answer = numOne * numTwo;
			document.getElementById("numOne").innerHTML = numOne;
			document.getElementById("numTwo").innerHTML = numTwo;
			document.getElementById("playerAnswer").value = "";
		} else {
			totalQuestions++;
			numOne = Math.round(25 * Math.random());
			numTwo = Math.round(25 * Math.random());
			answer = numOne * numTwo;
			document.getElementById("numOne").innerHTML = numOne;
			document.getElementById("numTwo").innerHTML = numTwo;
			document.getElementById("playerAnswer").value = "";
		}
	} else {alert("Time's up!  You are not allowed to answer anymore.");}
}
