function preload()
{
    this.load.setBaseURL('http://localhost:8080');

    this.load.image('sky','assets/sprites/sky.png');
    this.load.image('ground','assets/sprites/platform.png');
    this.load.image('star','assets/sprites/star.png');
    this.load.image('bomb','assets/sprites/bomb.png');

    // Load the sprite sheet for the character
    this.load.spritesheet(
        'dude',
        'assets/sprites/character/dude.png',
        {
            frameWidth: 32,
            frameHeight: 48
        }
    );
    
}