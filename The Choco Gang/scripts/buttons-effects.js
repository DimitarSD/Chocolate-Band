(function () {
	var ukalButton = document.getElementById('calculate-ukal');

	ukalButton.onclick = function () {
		parent.location.href = '../pages/calculator.html';
	};

	var bandButton = document.getElementById('the-band');

	bandButton.onclick = function () {
		parent.location.href = '../pages/the-band.html';
	};

	var howToButton = document.getElementById('how-to');

	howToButton.onclick = function () {
		parent.location.href = '../pages/how-to.html';
	};
} ());