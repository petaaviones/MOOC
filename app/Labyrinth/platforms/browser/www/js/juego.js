var app={
 inicio: function(){
    DIAMETRO_BOLA = 50;
    velocidadX = 0;
    velocidadY = 0;
    puntuacion = 0;
    
    alto  = document.documentElement.clientHeight;
    ancho = document.documentElement.clientWidth;
    
   //app.vigilaSensores();
   app.iniciaJuego();
  },

 iniciaJuego: function(){

    function preload() {
      game.physics.startSystem(Phaser.Physics.ARCADE);

      game.stage.backgroundColor = '#2E9AFE';
      game.load.image('bola', 'assets/bola.png');
      game.load.image('objetivo', 'assets/finish.png');
      game.load.image('level3', 'assets/level3.png');
      console.log(ancho);
      console.log(alto);
    }

    function create() {
      //Meta
      objetivo = game.add.sprite(40, app.inicioFinishY(),'objetivo');
      //Bola
      bola = game.add.sprite(40, 60,'bola');
      // LEVEL MAZE
       // creation of a bitmap data with the same size as the game
          this.bitmap = game.add.bitmapData(game.width, game.height);
          
          // drawing proper "level" image on the bitmap data
          this.bitmap.draw("level3");
          
          // updating bitmap data to let it have actual image data
          this.bitmap.update();
          
          // adding the bitmap data as a sprite
          game.add.sprite(0, 0, this.bitmap);

    }

    function update(){
     
    }

    var estados = { preload: preload, create: create, update: update };
    var game = new Phaser.Game(ancho, alto, Phaser.CANVAS, 'phaser',estados);
  },

  inicioFinishX: function(){
    return ancho - DIAMETRO_BOLA;
  },

  inicioFinishY: function(){
    return alto - 100;
  },
  
};

if ('addEventListener' in document) {
    document.addEventListener('deviceready', function() {
        app.inicio();
    }, false);
}