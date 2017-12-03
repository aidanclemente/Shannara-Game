$(document).ready(function(){

var shannaraGame = {

		fury: {
			healthPoints: 100,
			attackPower: 0,
			counterAttackPower: 8,
		},		

		riga: {
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

var yourCharacter = "";
var defender = "";

$("#furyHP").html(shannaraGame.fury.healthPoints);
$("#rigaHP").html(shannaraGame.riga.healthPoints);
$("#dagdaMorHP").html(shannaraGame.dagdaMor.healthPoints);
$("#bandonHP").html(shannaraGame.bandon.healthPoints);



// When picture is clicked, the others change background color and move bellow
$(".character").on("click", function() {
	console.log("character button clicked");
	var selected = this.value;
	console.log(selected);

	if (yourCharacter == "") {
		selected = yourCharacter;
		alert(selected);
		if (yourCharacter == "bandon") {
			$("#riga, #dagdaMor, #fury").contents().appendTo("#enemies");

			$("#bandon").css("border", "2px solid green");
		} else if (yourCharacter == "dagdaMor") {
			$("#fury, #bandon, #riga").contents().appendTo("#enemies");

			$("#dagdaMor").css("border", "2px solid green");
		} else if (yourCharacter == "riga") {
			$("#dagdaMor, #fury, #bandon").contents().appendTo("#enemies");	

			$("#riga").css("border", "2px solid green");
		} else {
			$("#bandon, #dagdaMor, #riga").contents().appendTo("#enemies");
			$(".bandon, .dagdaMor, .riga").css("background-color", "red");
			$(".fury").css("border", "2px solid green");
		}
	} else {
		selected = defender;

		if (defender == "bandon") {
			$("#bandon").contents().appendTo("#defenderArea");
			$("#bandon").css("border", "2px solid green");
		} else if (defender == "dagdaMor") {
			$("#dagdaMor").contents().appendTo("#defenderArea");	
			$("#dagdaMor").css("border", "2px solid green");
		} else if (defender == "riga") {
			$("#riga").contents().appendTo("#defenderArea");	
			$("#riga").css("border", "2px solid green");
		} else {
			$("#fury").contents().appendTo("#defenderArea");	
			$("#fury").css("border", "2px solid green");
		} 
	};
});

//attack button

//initialize the game here this is where we call all of the methods


//restart button that appears at end of game with end of game message
});