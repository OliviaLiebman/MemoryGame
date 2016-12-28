var NUM_OF_CARDS = 12;
var d = document;

function init() {

	var containerVar = document.getElementById("containerId");

	for (var n = 0; n < 4; n++) {

		var rowDiv = document.createElement("div");
		rowDiv.classList.add("row");
		containerVar.appendChild(rowDiv);

		for (var k = 0; k < 3; k++) {

			var columnDiv = document.createElement("div");
			columnDiv.classList.add("col-md-4");
			columnDiv.classList.add("card");
			columnDiv.classList.add("clickable");
			rowDiv.appendChild(columnDiv);
		}
}

	//bring in pictures that will be on back of cards:
	var cards = document.getElementsByClassName("card");
	for (var i = 1; i <= NUM_OF_CARDS; i++) {
		var m = i-1;

		var cardImg = document.createElement("img");
		cardImg.src = "./images/" + i + ".jpg";
		// cardImg.classList.add("clickable");
		cardImg.classList.add("cardPicture")
		cardImg.id = "c" + i; //id: c1 through c12
		// cards[m].appendChild(cardImg);
		

	}
}

