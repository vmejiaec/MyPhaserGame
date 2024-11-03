var platforms;

function create()
{
    this.add.image(400,300,'sky');
    this.add.image(400,300,'star');

    platforms = this.physics.add.staticGroup();

    platforms.create(400,560,'ground').setScale(2).refreshBody();

    platforms.create(600,400,'ground');
    platforms.create( 50,250,'ground');
    platforms.create(750,220,'ground');
} 