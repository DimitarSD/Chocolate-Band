$(document).ready(function () {
    var canvas = document.getElementById('the-canvas');
    var ctx = canvas.getContext('2d');

    var calculateUkalButton = document.getElementById('calculate-ukal');

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(105, 70, 40, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.moveTo(50, 45);
    ctx.lineTo(70, 50);
    ctx.lineTo(60, 35);
    ctx.moveTo(65, 27);
    ctx.lineTo(70, 50);
    ctx.lineTo(78, 30);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
    ctx.fillStyle = '#4cff00';
    ctx.fillRect(80, 50, 50, 10);
    ctx.fillStyle = 'black';
    ctx.fillRect(90, 53, 10, 6);
    ctx.fillRect(115, 53, 10, 6);
    ctx.stroke();
});