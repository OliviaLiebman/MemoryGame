var NUM_OF_CARDS = 12;
var d = document;
var imageArr = [];
var cardNumCounter = 0, b = 0, f = 0, u = 0, plus = 0;
var columnDiv;
var cardImg;
var imgArrDouble = [];

function init() {

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
	var allCards = d.getElementsByClassName("card");
	for (var a = 0; a < NUM_OF_CARDS; a++) {
		allCards[a].addEventListener("click", flipCard);
	}

	var cards = document.getElementsByClassName("card");
	for (var i = 1; i <= NUM_OF_CARDS/2; i++) {
		var m = i-1; // m goes from 0 to 11
		cardImg = d.createElement("img");
		cardImg.src = "./images/" + i + ".jpg";
		cardImg.classList.add("cardPicture")
		cardImg.id = "c" + i; //id: c1 through c12
		imageArr.push("./images/" + i + ".jpg");//imageArr is made up of the cardImg id's
		imgArrDouble = imageArr.concat(imageArr);

		console.log(cardImg.id);
	}

	//shuffle array:
	var minus = 5;
	for (var b = imgArrDouble.length; b > 0; b--) {
			var x = Math.floor((Math.random() * minus) + 0);
			u = imgArrDouble[b - 1];
			imgArrDouble[b - 1]	= imgArrDouble[x];
			imgArrDouble[x] = u;
			a--;
			}

}

var clickCount = 0;
function flipCard(e) {

	if (clickCount < 2) {	

		d.getElementById(e.target.id).style.backgroundImage = "url(" + imgArrDouble[e.target.id - 1] + ")";
		
		setTimeout(function() {d.getElementById(e.target.id).style.backgroundImage = "url(./images/texture.jpg)";}, 3000);
		clickCount++;
	}
	else {
		clickCount = 0;
	}
}


	// 	document.getElementById("showImage").onclick = function() {
	//     document.getElementById("theImage").style.visibility = "visible";
	// }

// function compareImageId() {
// 	//will compare the image sources to see if pic is the same as previously clicked. If yes,
// 	//kill timeout and keep images visible. If not same, flip pics, reset click counter to 0.
// }

