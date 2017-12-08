$(document).ready(function() {

	var shannaraGame = {

		fury: {
			name: "Fury",
			healthPoints: 180,
			originalAttackPower: 10,
			attackPower: 10,
			counterAttackPower: 12,
		},		
		riga: {
			name: "Riga",
			healthPoints: 160,
			originalAttackPower: 8,
			attackPower: 8,
			counterAttackPower: 10,
		},
		dagdaMor: {
			name: "Dagda Mor",
			healthPoints: 240,
			originalAttackPower: 15,
			attackPower: 15,
			counterAttackPower: 17,
		},
		bandon: {
			name: "Bandon",
			healthPoints: 210,
			originalAttackPower: 12,
			attackPower: 12,
			counterAttackPower: 14,
		}
	}

	var yourCharacter = "";
	var defender = "";
	var wins = 0;

	$("#body").css("background-image", "url(assets/images/background" + [Math.floor(Math.random() * 7) +1] + ".jpg)");

	$("#furyHP").html(shannaraGame.fury.healthPoints);
	$("#rigaHP").html(shannaraGame.riga.healthPoints);
	$("#dagdaMorHP").html(shannaraGame.dagdaMor.healthPoints);
	$("#bandonHP").html(shannaraGame.bandon.healthPoints);

// Selecting Character and Defender
	$(".character").on("click", function() {
		$("#yourCharacter").html("Your Character");
		$("#availEnemies").attr("style", "display: block");
		$("#defender").attr("style", "display: block");
		$("#defender").html("Click on an enemy to choose a defender");
		$("#defender").css("color", "black");

		var selected = this.value;

		if (yourCharacter == "") {
			yourCharacter = selected;
			$("." + yourCharacter).attr("disabled", true);
			$("." + yourCharacter).css("border", "2px solid green");
			$("#name" + yourCharacter, ).css("color", "black");
			$("#" + yourCharacter + "HP").css("color", "black");

			if (yourCharacter == "bandon") {
				$("#riga, #dagdaMor, #fury").appendTo("#enemies");
	 			$(".fury, .dagdaMor, .riga").css("background-color", "red");			
			} else if (yourCharacter == "dagdaMor") {
				$("#fury, #bandon, #riga").appendTo("#enemies");
				$(".bandon, .fury, .riga").css("background-color", "red");
			} else if (yourCharacter == "riga") {
				$("#dagdaMor, #fury, #bandon").appendTo("#enemies");	
				$(".bandon, .dagdaMor, .fury").css("background-color", "red");
			} else {
				$("#bandon, #dagdaMor, #riga").appendTo("#enemies");
				$(".bandon, .dagdaMor, .riga").css("background-color", "red");
			}
		} else {
			defender = selected;
			$("#" + defender).attr("disabled", true);
			$(".attack").attr("disabled", false);
			$("#fightSection, .attack").attr("style", "display: block");
			$("#defender").html("Defender");
			$("#" + defender).appendTo("#defenderArea");
			$("." + defender).css("border", "2px solid green");
			$("." + defender).css("color", "white");
			$("." + defender).css("background-color", "black");
		};
	});

//attack button
	$(".attack").on("click", function() {		
//attack
		shannaraGame[defender].healthPoints -= shannaraGame[yourCharacter].attackPower;
		shannaraGame[yourCharacter].attackPower += shannaraGame[yourCharacter].originalAttackPower;	
		$("#" + defender + "HP").html(shannaraGame[defender].healthPoints);

//counter attack by defender
		shannaraGame[yourCharacter].healthPoints -= shannaraGame[defender].attackPower;
		$("#" + yourCharacter + "HP").html(shannaraGame[yourCharacter].healthPoints);
		$("#narration").html("You attacked " + shannaraGame[defender].name + " for " + shannaraGame[yourCharacter].attackPower + " damage." + "<br>" + shannaraGame[defender].name + " attacked you back for " + shannaraGame[defender].attackPower + " damage.");
		winLoose();
		gameOver();
		
	});

	function winLoose() {
		if (shannaraGame[defender].healthPoints <= 0) {
			$(".attack").attr("disabled", true);
			$("#" + defender).attr("style", "display: none");
			$("#defender").html("You have defeated " + shannaraGame[defender].name + "! Choose another enemy to battle!");
			$("#defender").css("color", "yellow");
			$("#narration").html("");
			wins++;
		} if (shannaraGame[yourCharacter].healthPoints <= 0) {
			$("#" + yourCharacter).attr("style", "display: none");
			$("#defender").html("You were defeated by " + shannaraGame[defender].name + "! Attend to your wounds and try again.")
			$("#defender").css("color", "red");
			$("#narration").html("");
			$("#restart").attr("style", "display: block");
			$("#fightSection, #availEnemies, #yourCharacter, .attack").attr("style", "display: none");		
		} 
	};

	function gameOver() {
		if (wins == 3) {
			$("#narration").html("");
			$("#yourCharacter").html("WINNER!!!!");
			$("#defender").html("Congratuations!! You have defeated all of your enemies.<br> Go rest and gather your strength. <br> The Warlock Lord will be coming for you soon!!!");
			$("#defender").css("color", "darkblue");
			$("#restart").attr("style", "display: block");
			$(".attack, #availEnemies, #fightSection").attr("style", "display: none");
		}
	};

	$("#restart").on("click", function() {
		location.reload();
	});

});