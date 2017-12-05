$(document).ready(function() {

var shannaraGame = {

	fury: {
		healthPoints: 180,
		originalAttackPower: 10,
		attackPower: 10,
		counterAttackPower: 12,
	},		
	riga: {
		healthPoints: 160,
		originalAttackPower: 8,
		attackPower: 8,
		counterAttackPower: 10,
	},
	dagdaMor: {
		healthPoints: 240,
		originalAttackPower: 15,
		attackPower: 15,
		counterAttackPower: 17,
	},
	bandon: {
		healthPoints: 210,
		originalAttackPower: 12,
		attackPower: 12,
		counterAttackPower: 14,
	}
}

var yourCharacter = "";
var defender = "";
var wins = 0;

$("#furyHP").html(shannaraGame.fury.healthPoints);
$("#rigaHP").html(shannaraGame.riga.healthPoints);
$("#dagdaMorHP").html(shannaraGame.dagdaMor.healthPoints);
$("#bandonHP").html(shannaraGame.bandon.healthPoints);

// Selecting Character and Defender
$(".character").on("click", function() {
	$("#yourCharacter").html("Your Character");

	var selected = this.value;

	if (yourCharacter == "") {
		yourCharacter = selected;
		if (yourCharacter == "bandon") {
			$("#riga, #dagdaMor, #fury").appendTo("#enemies");
 			$(".fury, .dagdaMor, .riga").css("background-color", "red");
			$(".bandon").css("border", "2px solid green");
		} else if (yourCharacter == "dagdaMor") {
			$("#fury, #bandon, #riga").appendTo("#enemies");
			$(".bandon, .fury, .riga").css("background-color", "red");
			$(".dagdaMor").css("border", "2px solid green");
		} else if (yourCharacter == "riga") {
			$("#dagdaMor, #fury, #bandon").appendTo("#enemies");	
			$(".bandon, .dagdaMor, .fury").css("background-color", "red");
			$(".riga").css("border", "2px solid green");
		} else {
			$("#bandon, #dagdaMor, #riga").appendTo("#enemies");
			$(".bandon, .dagdaMor, .riga").css("background-color", "red");
			$(".fury").css("border", "2px solid green");
		}
	} else {
		defender = selected;
		$("#" + defender).appendTo("#defenderArea");
		$("." + defender).css("border", "2px solid green");
		$("." + defender).css("color", "white");
		$("." + defender).css("background-color", "black");
	};
});

//attack button

$(".attack").on("click", function() {
	
	if (yourCharacter == "") {
		alert("Please select a character.");
	} else if (defender == "") {
		alert("Please select and enemy to attack.");
	} else {

	//attack
		shannaraGame[defender].healthPoints -= shannaraGame[yourCharacter].attackPower;
		shannaraGame[yourCharacter].attackPower += shannaraGame[yourCharacter].originalAttackPower;	
		$("#" + defender + "HP").html(shannaraGame[defender].healthPoints);

	//counter attack by defender
		shannaraGame[yourCharacter].healthPoints -= shannaraGame[defender].attackPower;
		$("#" + yourCharacter + "HP").html(shannaraGame[yourCharacter].healthPoints);
		$("#narration").html("You attacked " + defender + " for " + shannaraGame[yourCharacter].attackPower + " damage." + "<br>" +
			defender + " attacked you back for " + shannaraGame[defender].attackPower + " damage.");
		winLoose();
		gameOver();
	}	

});

//call this function inside attack button
function winLoose() {
	if (shannaraGame[defender].healthPoints <= 0) {
		$("#" + defender).attr("style", "display: none");
		$("#defender").html("You have defeated " + defender + "! Choose another enemy to battle!");
		$("#defender").css("color", "yellow");
		$("#narration").html("");
		wins++;
	} else if (shannaraGame[yourCharacter].healthPoints <= 0) {
		$("#" + yourCharacter).attr("style", "display: none");
		$("#defender").html("You were defeated by " + defender + "! Attend to your wounds and try again.")
		$("#defender").css("color", "red");
		$("#narration").html("");
		$("#restart").attr("style", "display: block");
	} else {
		//keep playing 
	}
};

function gameOver() {
	if (wins == 3) {
		$("#narration").html("Congratuations!! You have defeated all of your enemies. You are now ready to battle the Warlock Lord!" + "<br>" + "Go rest and gather your strength. The Warlock Lord will be coming for you soon!!!");
		$("#restart").attr("style", "display: block");
	}
};

$("#restart").on("click", function startGame() {
	location.reload();
});

});