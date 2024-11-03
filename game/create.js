var platforms;

function create()
{
    this.add.image(400,300,'sky');
    this.add.image(400,300,'star');

    // Plataformas
    platforms = this.physics.add.staticGroup();

    platforms.create(400,560,'ground').setScale(2).refreshBody();

    platforms.create(600,400,'ground');
    platforms.create( 50,250,'ground');
    platforms.create(750,220,'ground');

    // Player
    player = this.physics.add.sprite(100,450, 'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    // Anims
    this.anims.create(
        {
            key: 'left',
            frames: this.anims.generateFrameNumbers(
                'dude',
                {start: 0, end: 3}
            ),
            frameRate: 10,
            repeat: -1   //  El valor'repeat -1' indica que la animación debe volver a empezar cuando termine.
        }
    );

    this.anims.create(
        {
            key: 'right',
            frames: this.anims.generateFrameNumbers(
                'dude',
                {start: 5, end: 8}
            ),
            frameRate: 10,
            repeat: -1   //  El valor'repeat -1' indica que la animación debe volver a empezar cuando termine.
        }
    );

    this.anims.create(
        {
            key: 'turn',
            frames: [{key: 'dude', frame: 4}],
            frameRate: 20
        }
    );

    // Poner gravedad al player
    player.body.setGravityY(300);
    this.physics.add.collider(player,platforms);

    // Crear el gestor del teclado
    cursors = this.input.keyboard.createCursorKeys();

} 