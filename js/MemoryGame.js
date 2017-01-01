var NUM_OF_CARDS = 12;
var d = document;
var imageArr = [];
var cardNumCounter = 0;
var columnDiv;
var cardImg;
var imgArrDouble = [];
var keepScore = 5;


function init() {
	document.getElementById("playBtn").style.display = "none";

	var containerVar = d.getElementById("containerId");

	for (var n = 0; n < 4; n++) {
		var rowDiv = d.createElement("div");
		rowDiv.classList.add("row");
		containerVar.appendChild(rowDiv);

		for (var k = 0; k < 3; k++) {
			cardNumCounter++;
			columnDiv = d.createElement("div");
			columnDiv.classList.add("col-md-4");
			columnDiv.classList.add("card");
			columnDiv.classList.add("clickable");
			columnDiv.id = cardNumCounter;//id's: 1 to 12
			rowDiv.appendChild(columnDiv);
		}
}
	var allCards = d.getElementsByClassName("card"); //array called allCards, made up of elements with class "card"
	for (var a = 0; a < NUM_OF_CARDS; a++) {
		allCards[a].addEventListener("click", flipCard); //call function flipCard every time a card is clicked
	}

	var cards = d.getElementsByClassName("card");
	for (var i = 1; i <= NUM_OF_CARDS/2; i++) {
		cardImg = d.createElement("img");
		cardImg.src = "./images/" + i + ".jpg";
		cardImg.classList.add("cardPicture")
		cardImg.id = "c" + i; //id: c1 through c12
		imageArr.push("./images/" + i + ".jpg");//imageArr is made up of the cardImg id's
		imgArrDouble = imageArr.concat(imageArr);
	}

	//shuffle array:
	var minus = 5;
	for (var b = imgArrDouble.length; b > 0; b--) {
			var x = Math.floor((Math.random() * minus) + 0);
			var u = imgArrDouble[b - 1];
			imgArrDouble[b - 1]	= imgArrDouble[x];
			imgArrDouble[x] = u;
			a--;
	}
}

var sourceArr = [];
var clickedArr = [];
var idArr = [];
var flipCardCounter = 0;
function flipCard(e) {

flipCardCounter++;

	if (flipCardCounter < 3) {
		d.getElementById(e.target.id).classList.add("clicked");
		clickedArr = d.querySelectorAll(".clicked"); //clickedArr is now an array of length of number of pics clicked (max of 2)
	
		if (clickedArr.length < 3) { //allow only 2 cards to be clicked at a time
			d.getElementById(e.target.id).style.backgroundImage = "url(" + imgArrDouble[e.target.id - 1] + ")";
				
			if (clickedArr.length === 1) {//first clicked card
			sourceArr[0] = imgArrDouble[e.target.id - 1];
			idArr[0] = d.getElementById(e.target.id).id;
			}
			else if (clickedArr.length === 2) {//second clicked card
				sourceArr[1] = imgArrDouble[e.target.id - 1];
				idArr[1] = d.getElementById(e.target.id).id;
			}
		}//nested
	}//outer nested

	if (clickedArr.length===2) {

		if (sourceArr[0] === sourceArr[1]) {//if sources are equal
			clearClicked();
			keepScore++;
			console.log(keepScore);
			if (keepScore==6) {
				setTimeout(winner, 500);
			}
			return;
		}
		else {
			setTimeout(function() {d.getElementById(idArr[0]).style.backgroundImage = "url(./images/texture.jpg)";}, 3000);
			setTimeout(function() {d.getElementById(idArr[1]).style.backgroundImage = "url(./images/texture.jpg)";}, 3000);
			setTimeout(clearClicked, 3000);
		}
	}

	function clearClicked() { 
	for (var j = 0; j < 2; j++) {
		clickedArr[j].classList.remove("clicked");
		}
	sourceArr.length = 0;	
	clickedArr.length = 0;
	flipCardCounter = 0;
	}//end of clearClicked
}//end of flipCard

function winner() {
		var getConfirmation = confirm("Do you want to play again?");
		if (getConfirmation===true) {
			location.reload(); 

		}
}

