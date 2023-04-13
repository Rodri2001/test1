let snakeHead;
let snakeSpeed = 100;
let currentDirection = 'right';

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    backgroundColor: '#bfcc00',
    parent: 'phaser-example',
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  };
  
  var game = new Phaser.Game(config);
  
  function preload() {
    this.load.image('snake-head', 'assets/snake-head.png');
    this.load.audio('move', 'assets/move.wav');
  }
  
  function create() {
    snakeHead = this.add.sprite(320, 240, 'snake-head');
    snakeHead.setScale(4);
    snakeHead.setOrigin(0.5);
  
    this.sound.add('move');
  
    this.input.keyboard.on('keydown', function (event) {
      switch (event.keyCode) {
        case 37:
          currentDirection = 'left';
          break;
        case 38:
          currentDirection = 'up';
          break;
        case 39:
          currentDirection = 'right';
          break;
        case 40:
          currentDirection = 'down';
          break;
      }
    });
  }
  
  
  function update() {
    switch (currentDirection) {
        case 'left':
          snakeHead.x -= snakeSpeed * (delta / 1000);
          break;
        case 'up':
          snakeHead.y -= snakeSpeed * (delta / 1000);
          break;
        case 'right':
          snakeHead.x += snakeSpeed * (delta / 1000);
          break;
        case 'down':
          snakeHead.y += snakeSpeed * (delta / 1000);
          break;
      }
    
      this.sound.play('move');
  }