import { Injectable } from '@angular/core';
import { BallComponent } from './ball/ball.component';


@Injectable()
export class GameService {

  GAME_WIDTH = 800;
  GAME_HEIGHT = 600;
  lives = 1;
  // image = document.getElementById('ball-img');
  img: HTMLImageElement = new Image();

  gameWidth = this.GAME_WIDTH;
  gameHeight = this.GAME_HEIGHT;
  size = 20;

  position = {
    x: 10,
    y: 400
  };

  speed = {
    x: 4,
    y: -2
  };

  src: string;
  imgWidth: number;
  imgHeight: number;

  constructor() {
    // this.imgWidth = 400;
    // this.imgHeight = 400;
    // this.src = '../assets/images/luno-logo.png';
  }

  update(deltaTime) {
    console.log('update service deltaTime: ', deltaTime);
  }

  draw(ctx) {
    this.img.src = '../assets/images/luno-logo.png';
    console.log('this.img', this.img);
    console.log('draw ball ctx', ctx);
    ctx.drawImage(
      this.img.src,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }
}
