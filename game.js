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
  
  function preload() {}
  
  function create() {}
  
  function update() {}