import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
    /** Template reference to the canvas element */
  @ViewChild('gameScreen') gameScreen: ElementRef;

    /** Canvas 2d ctx */
  public ctx: CanvasRenderingContext2D;

  constructor(public game: GameService) {}
//  game = new this.game(this.GAME_WIDTH, this.GAME_HEIGHT);

  ngAfterViewInit(): void {
    this.ctx = (this.gameScreen.nativeElement as HTMLCanvasElement).getContext('2d');

    this.gameLoop(this.ctx);
  }

  ngOnInit() {
    // window.requestAnimationFrame(this.gameLoop);
  }

// game loop  - runs every frame, updates all objects,
// redraws them into their new position, move to next frame
  gameLoop(timestamp) {

   let lastTime = 0;

    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    this.ctx.clearRect(0, 0, this.game.GAME_WIDTH, this.game.GAME_HEIGHT);

    this.game.update(deltaTime);
    this.game.draw(this.ctx);
    /*
      When using ES2015 classes, it is important to remember that class methods are
      functions that are declared as object properties. The context (this) will be the object that
       the method is attached to. So when passing the method to the requestAnimationFrame(...) method,
       it will no longer be called with the same object reference. Because of this, we need to bind the
        context of the gameLoop method before passing it to the requestAnimationFrame(...)
    */
    requestAnimationFrame(this.gameLoop.bind(this));
   }
  }
