import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-paddle',
  templateUrl: './paddle.component.html',
  styleUrls: ['./paddle.component.css']
})
export class PaddleComponent implements OnInit {

  //   size of paddle
  width = 150;
  height = 20;

  // velocity of paddle
  speed = 0;
  maxSpeed = 7;

  // position of paddle
  position = {
    x: this.game.GAME_WIDTH / 2 - this.width / 2,
    y: this.game.GAME_HEIGHT - this.height - 10
  };

  constructor(public game: GameService) { }

  ngOnInit() {
  }

  // game controls
  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }

  // draw canvas
  draw(ctx) {
    ctx.fillStyle = 'goldenrod';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  // update canvas
  update(deltaTime) {
    // delta-time aka dt is the change in time ie how much time has past
    this.position.x += this.speed;

    // tslint:disable-next-line:no-unused-expression
    this.position.x < 0 ? (this.position.x = 0) : this.position.x;
    this.position.x + this.width > this.game.GAME_WIDTH
      ? (this.position.x = this.game.GAME_WIDTH - this.width)
      // tslint:disable-next-line:no-unused-expression
      : this.position.x;
  }
}
