import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})

export class BallComponent implements OnInit {

  constructor(public game: GameService) { }
  image = document.getElementById('ball-img');

  gameWidth = this.game.GAME_WIDTH;
  gameHeight = this.game.GAME_HEIGHT;
  size = 20;

  position = {
    x: 10,
    y: 400
  };

  speed = {
    x: 4,
    y: -2
  };

  ngOnInit() {
    this.resetPositionAndSpeed();
    // this.game.update(null);
    // if (this.game.update(true)) {
    //   console.log('init ball');
    // }
  }

  draw(ctx) {
    console.log('draw ball', ctx);
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  resetPositionAndSpeed() {
    this.position = {
      x: 10,
      y: 400
    };

    this.speed = {
      x: 4,
      y: -2
    };
  }

  update(deltaTime) {
    console.log('update ball', deltaTime);

    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // avoid ball going through the horizontal walls
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    // top wall
    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    // bottom wall
    if (this.position.y + this.size > this.gameHeight) {
      this.game.lives--;
      console.log('lives', this.game.lives);
      this.resetPositionAndSpeed();
    }

    // if (detectCollision(this, this.game.paddle)) {
    //   this.speed.y = -this.speed.y;
    //   this.position.y = this.game.paddle.position.y - this.size;
    // }
  }
}
