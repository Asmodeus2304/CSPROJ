//variables made universal for use across multiple functions
var name;
var confirmation;

//username() processes submitted 
function username() {
	name = document.getElementById("username").value;
	if (true) {} else {}
	alert("Hello " + name + ", the username that you have submitted has been saved!");
}

//confirms if user is ok with not submitting data to form
function usernameConfirm() {
	if (name == "") {
		if (confirm("Are you sure that you want to proceed without submitting a username?")) {
			window.location.replace("htdocs/landing_page.html");
		}
	} else {
			window.location.replace("htdocs/landing_page.html");		
	}
}

//makes #opening_div flexible to user input my manipulating <h1></h1> according to whether or not user submitted form data
window.onload = function() {
	name == "" ? (document.getElementById("greeting").innerHTML = "Hi!") : (document.getElementById("greeting").innerHTML = "Hi, " + name + "!");
}

function openingDivClose() {
  document.getElementById("opening_div").style.display = "none";
  document.getElementById("hidden_images").style.display = "block";
} 

//manipulates #confirmation to whether or not the user submits their input
function surveyConfirm() {
	if (confirm("Submit your answer?")) {
		confirmation = "You have submitted your answer, thank you!";
	} else {
		confirmation = "You haven't submitted your answer yet!";
	}
	document.getElementById("confirmation").innerHTML = confirmation;
}

//asks user who hasnt submitted form data if they want to proceed and displays #hidden_window if they agree
function openHiddenWindow() {
	if (confirmation == "You have submitted your answer, thank you!") {
		document.getElementById("hidden_window").style.display = "block";
	} else {
		if (confirm("Proceed without submitting your survey answer?")) {
		document.getElementById("hidden_window").style.display = "block";
		}
	}
}