export default class ParallaxScene extends Phaser.Scene {
  constructor() {
    super('parallax-scene')
  }

  preload() {
    this.load.image('sky', 'assets/images/sky.png');

  }

  create() {
    const height = this.scale.height
    const width = this.scale.width
    
    this.add.image(width * 0.5, height * 0.5 , 'sky')
  }

}