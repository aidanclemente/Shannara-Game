$(document).ready(function(){

var shanaraGame = {

	peopleToPick: {

		amberle: {
			healthPoints: 100,
			attackPower: 0,
			counterAttackPower: 8,
		},		

		eretria: {
			healthPoints: 150,
			attackPower: 0,
			counterAttackPower: 10,
		},

		dagdaMor: {
			healthPoints: 250,
			attackPower: 0,
			counterAttackPower: 15,
		},

		bandon: {
			healthPoints: 200,
			attackPower: 0,
			counterAttackPower: 20,
		}
	}
}

var yourCharacter = "";
var defender = "";

// When on is clicked, the others change background color and border color and move bellow
$(".character").on("click", function() {
	console.log("character button clicked");
	var selected = this.value;
	console.log(this);

	if (yourCharacter == "") {
		selected = yourCharacter;
	alert(selected);
		if (yourCharacter == "bandon") {
			$("#eretria").contents().appendTo("#enemies");
			$("#dagdaMor").contents().appendTo("#enemies");	
			$("#amberle").contents().appendTo("#enemies");

			$("#bandon").css("border", "2px solid green");
		} else if (yourCharacter == "dagdaMor") {
			$("#amberle").contents().appendTo("#enemies");
			$("#bandon").contents().appendTo("#enemies");
			$("#eretria").contents().appendTo("#enemies");

			$("#dagdaMor").css("border", "2px solid green");
		} else if (yourCharacter == "eretria") {
			$("#dagdaMor").contents().appendTo("#enemies");	
			$("#amberle").contents().appendTo("#enemies");
			$("#bandon").contents().appendTo("#enemies");

			$("#eretria").css("border", "2px solid green");
		} else {
			$("#bandon").contents().appendTo("#enemies");
			$("#dagdaMor").contents().appendTo("#enemies");	
			$("#eretria").contents().appendTo("#enemies");

			$(".amberle").css("border", "2px solid green");
		}
	} else {
		selected = defender;

		if (defender == "bandon") {
			$("#bandon").contents().appendTo("#defenderArea");
			$("#bandon").css("border", "2px solid green");
		} else if (defender == "dagdaMor") {
			$("#dagdaMor").contents().appendTo("#defenderArea");	
			$("#dagdaMor").css("border", "2px solid green");
		} else if (defender == "eretria") {
			$("#eretria").contents().appendTo("#defenderArea");	
			$("#eretria").css("border", "2px solid green");
		} else {
			$("#amberle").contents().appendTo("#defenderArea");	
			$("#amberle").css("border", "2px solid green");
		} 
	};
})



//initialize the game here this is where we call all of the methods


//restart button that appears at end of game
});