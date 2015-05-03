var calculateButton = document.getElementById('calculate');

calculateButton.onclick = function () {
    var chocolateNumber = document.getElementById('chocolate').value;
    var milisecond = document.getElementById('miliseconds').value;
    var temperature = document.getElementById('temperature').value;

    var result = parseInt(chocolateNumber) * 3 + parseInt(milisecond) - 10 / parseInt(temperature);

    var divElement = document.getElementById('output');
    divElement.innerText = Math.floor(result) + ' U';

};

var backButton = document.getElementById('back');

backButton.onclick = function () {
    parent.location.href = 'index.html';
};

var clearAllButton = document.getElementById('clear');

clearAllButton.onclick = function () {
    var display = document.getElementById('output');
    display.innerText = '';
};