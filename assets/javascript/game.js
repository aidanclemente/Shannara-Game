$(document).ready(function(){

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

		if (defender == "bandon") {
			$("#bandon").appendTo("#defenderArea");
			$(".bandon").css("border", "2px solid green");
			$(".bandon").css("color", "white");
			$(".bandon").css("background-color", "black");
		} else if (defender == "dagdaMor") {
			$("#dagdaMor").appendTo("#defenderArea");	
			$(".dagdaMor").css("border", "2px solid green");
			$(".dagdaMor").css("color", "white");
			$(".dagdaMor").css("background-color", "black");
		} else if (defender == "riga") {
			$("#riga").appendTo("#defenderArea");	
			$(".riga").css("border", "2px solid green");
			$(".riga").css("color", "white");
			$(".riga").css("background-color", "black");
		} else {
			$("#fury").appendTo("#defenderArea");	
			$(".fury").css("border", "2px solid green");
			$(".fury").css("color", "white");
			$(".fury").css("background-color", "black");
		} 
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
			console.log("!!!your character is: " + yourCharacter);
			console.log("Player attack power: " + shannaraGame[yourCharacter].attackPower);
			console.log("Defender's health points: " + shannaraGame[defender].healthPoints);
			console.log("#" + defender + "Hp");

		//$("#" + defender + "Hp").html(shannaraGame[defender].healthPoints);

		if (defender == "dagdaMor") {
			$("#dagdaMorHP").html(shannaraGame[defender].healthPoints);
		} else if (defender == "riga") {
			$("#rigaHP").html(shannaraGame[defender].healthPoints);
		} else if (defender == "fury") {
			$("#furyHP").html(shannaraGame[defender].healthPoints);
		} else {
			$("#bandonHP").html(shannaraGame[defender].healthPoints);
		};
	//counter attack by defender
		shannaraGame[yourCharacter].healthPoints -= shannaraGame[defender].attackPower;
		if (yourCharacter == "dagdaMor") {
			$("#dagdaMorHP").html(shannaraGame[yourCharacter].healthPoints);
		} else if (yourCharacter == "riga") {
			$("#rigaHP").html(shannaraGame[yourCharacter].healthPoints);
		} else if (yourCharacter == "fury") {
			$("#furyHP").html(shannaraGame[yourCharacter].healthPoints);
		} else {
			$("#bandonHP").html(shannaraGame[yourCharacter].healthPoints);
		};

		// $("#" + yourCharacter + "Hp").html(shannaraGame[yourCharacter].healthPoints);

		$("#narration").html("You attacked " + defender + " for " + shannaraGame[yourCharacter].attackPower + " damage." + "<br>" +
			defender + " attacked you back for " + shannaraGame[defender].attackPower + " damage.");
		winLoose();
		gameOver();
	}	

});

//call this function inside attack button
function winLoose() {
	if (shannaraGame[defender].healthPoints <= 0) {
		if (defender == "dagdaMor") {
			wins++;
			$("#dagdaMor").attr("style", "display: none");
			$("#narration").html("You have defeated " + defender + "! Choose another enemy to battle!")
		} else if (defender == "fury") {
			wins++;
			$("#fury").attr("style", "display: none");
			$("#narration").html("You have defeated " + defender + "! Choose another enemy to battle!")
		} else if (defender == "riga") {
			wins++
			$("#riga").attr("style", "display: none");
			$("#narration").html("You have defeated " + defender + "! Choose another enemy to battle!")
		} else {
			wins++;
			$("#bandon").attr("style", "display: none");
			$("#narration").html("You have defeated " + defender + "! Choose another enemy to battle!")
		};
		//you win pick another defender
		//if defeated all the enemies, win message 
			//maybe have a counter for wins if wins = 3
		//play again button appears
		//restart game on click
	} else if (shannaraGame[yourCharacter].healthPoints <= 0) {
		//you loose message
		//play again button appears
		//restart game on click
	} else {
		//keep playing 
	}
}

function gameOver() {
	if (wins == 3) {
		$("#narration").html("Congratuations!! You have defeated all of your enemies. You are now ready to battle the Warlock Lord!" + "<br>" + "Go rest and gather your strength. The Warlock Lord will be coming for you soon!!!");
		$("#restart").attr("style", "display: block");
	}
};

$("#restart").on("click", function startGame() {
	yourCharacter = "";
	defender = "";
	wins = 0;

});



//restart button that appears at end of game with end of game message
});