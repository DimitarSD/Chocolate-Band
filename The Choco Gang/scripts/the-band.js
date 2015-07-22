(function () {
	var backButton = document.getElementById('back');

	backButton.onclick = function () {
		parent.location.href = '../pages/index.html';
	};
} ());