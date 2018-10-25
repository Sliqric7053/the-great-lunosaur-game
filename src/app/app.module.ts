import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameService } from './game.service';
import { PaddleComponent } from './paddle/paddle.component';
import { BallComponent } from './ball/ball.component';


@NgModule({
  declarations: [
    AppComponent,
    PaddleComponent,
    BallComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent],
})
export class AppModule { }
