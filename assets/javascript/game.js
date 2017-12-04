$(document).ready(function(){

var shannaraGame = {

		fury: {
			healthPoints: 120,
			originalAttackPower: 10,
			attackPower: 10,
			counterAttackPower: 10,
		},		

		riga: {
			healthPoints: 100,
			originalAttackPower: 8,
			attackPower: 8,
			counterAttackPower: 8,
		},

		dagdaMor: {
			healthPoints: 200,
			originalAttackPower: 15,
			attackPower: 15,
			counterAttackPower: 15,
		},

		bandon: {
			healthPoints: 160,
			originalAttackPower: 12,
			attackPower: 12,
			counterAttackPower: 12,
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
			$("#" + defender + "Hp").html(shannaraGame[defender].healthPoints);

	//counter attack by defender
	
	}	
console.log("you are atacking: " + defender);
console.log("your character is: " + yourCharacter);
});

//call this function inside attack button
function winLoose() {
	if (shannaraGame[defender].healthPoints <= 0) {
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


//restart button that appears at end of game with end of game message
});