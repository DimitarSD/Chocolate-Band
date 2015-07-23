(function () {
	var game = new Phaser.Game(800, 400, Phaser.Canvas, 'choco gang');
	
	var GameState = function (game) { };
	
	GameState.prototype.preload = function () {
		
	};
	
	GameState.prototype.create = function () {
		
	};
	
	GameState.prototype.update = function () {

	};
	
	game.state.add('choco gang', GameState, true);
 }());