const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics:{
        default: 'arcade',
        arcade:{
            graviy: {
                y:300
            },
            debug: false
        }
    }
};
