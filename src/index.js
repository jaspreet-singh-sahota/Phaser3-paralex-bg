import './styles/style.css';

import parallaxScene from './scenes/parallaxScene'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 600 },
      // debug: true
    }
  },
  scene: [parallaxScene]
}

export default new Phaser.Game(config)