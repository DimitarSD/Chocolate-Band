(function () {
	var game = new Phaser.Game(800, 400, Phaser.Canvas, 'choco gang'),
		cursors,
		map,
		firstLayer,
		secondLayer,
		player,
		chocolates,
		score = 0,
		scoreText;

	var GameState = function (game) { };

	GameState.prototype.preload = function () {
		this.load.tilemap('MyTilemap', 'scripts/firstMap.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.image('tiles', 'assets/candy.png');
		this.load.image('chocolate', 'assets/chocolate.png');
		this.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	};

	GameState.prototype.create = function () {
		this.world.setBounds(0, 0, 3500, 400);
		this.physics.startSystem(Phaser.Physics.ARCADE);

		map = this.add.tilemap('MyTilemap');
		map.addTilesetImage('tiles', 'tiles');

		firstLayer = map.createLayer('MyTerrain');
		firstLayer.resizeWorld();
		firstLayer.wrap = true;

		secondLayer = map.createLayer('Background');
		secondLayer.resizeWorld();
		secondLayer.wrap = true;
		secondLayer.collisionLayer = true;

		// Set collision between player and platforms
		map.setCollisionByExclusion([0, 1, 2, 3, 32, 33, 34], true, secondLayer);

		cursors = this.input.keyboard.createCursorKeys();
		secondLayer.debug = true;

		chocolates = this.add.group();

		var choco = chocolates.create(350, 150, 'chocolate');
		choco.scale.setTo(0.5, 0.5);

		choco = chocolates.create(475, 115, 'chocolate');
		choco.scale.setTo(0.5, 0.5);

		choco = chocolates.create(605, 155, 'chocolate');
		choco.scale.setTo(0.5, 0.5);

		choco = chocolates.create(950, 175, 'chocolate');
		choco.scale.setTo(0.5, 0.5);

		choco = chocolates.create(1050, 175, 'chocolate');
		choco.scale.setTo(0.5, 0.5);

		choco = chocolates.create(1655, 285, 'chocolate');
		choco.scale.setTo(0.5, 0.5);
		choco = chocolates.create(1700, 285, 'chocolate');
		choco.scale.setTo(0.5, 0.5);
		choco = chocolates.create(1745, 285, 'chocolate');
		choco.scale.setTo(0.5, 0.5);

		choco = chocolates.create(1948, 200, 'chocolate');
		choco.scale.setTo(0.8, 0.8);
		
		// Player
		player = this.add.sprite(100, this.world.height - 250, 'dude');
		
		// Camera will move with the player
		this.camera.follow(player);
		
		// We need to enable physics on the player
		this.physics.arcade.enable(player);
		
		// Player physics properties
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;
		
		// The animations of walking left and right
		player.animations.add('left', [0, 1, 2, 3], 10, true);
		player.animations.add('right', [5, 6, 7, 8], 10, true);
		
		scoreText = this.add.text(16, 30, 'Score: 0', { fontsize: '32px', fill: 'brown' });
	};

	GameState.prototype.update = function () {
		this.physics.arcade.collide(player, secondLayer);
		this.physics.arcade.overlap(player, chocolates, collectChocolate, null, this);
		
		player.body.velocity.x = 0;

		if (cursors.left.isDown) {
			// Move to the left
			player.body.velocity.x = -140;
			player.animations.play('left');
		}
		else if (cursors.right.isDown) {
			// Move to the right
			player.body.velocity.x = 140;
			player.animations.play('right');
		}
		else {
			// Stand still
			player.animations.stop();
			player.frame = 4;
		}
		
		// Allow the player to jump if they are touching the ground
		if (cursors.up.isDown) {
			player.body.velocity.y = -190;
		}
	};

	function collectChocolate(player, chocolate) {
		chocolate.kill();
		
		score += 10;
    	scoreText.text = 'Score: ' + score;
	}

	game.state.add('choco gang', GameState, true);
} ());