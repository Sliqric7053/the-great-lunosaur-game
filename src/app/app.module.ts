import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameService } from './game.service';
import { PaddleComponent } from './paddle/paddle.component';


@NgModule({
  declarations: [
    AppComponent,
    PaddleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
