import { Component, HostBinding, OnInit } from '@angular/core';
import { TableComponent } from 'src/app/table/table.component';
import { GameValuesService } from '../game-values.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  drawAnimationBack = false;
  drawAnimationTop = false;
  card: string=null;
  cardZ: number=null;
  cardImg: string=null;
  game= null;
  table=null;

  constructor(game: GameValuesService, table:TableComponent) {
    this.game = game;
    this.table = table;
    this.card = game.stackArray.pop()
    this.cardZ= game.stackArray.length
    this.cardImg = this.card +".png"
  }
  @HostBinding("style.--angle") angle: string = this.setAngle();
  @HostBinding("style.--offsetX") offsetX: string = this.setOffset();
  @HostBinding("style.--offsetY") offsetY: string = this.setOffset();

  ngOnInit(): void {
  }

  setOffset(){
  let min = -60;
  let max = 60;
  return Math.floor(Math.random() * (max - min) + min) + "px";
  }

  setAngle(){
    let min = -360;
    let max = 360;
    return Math.floor(Math.random() * (max - min) + min) + "deg";
  }


  drawCard(){
    this.mouseStuff();
    this.drawAnimationBack=true;
    setTimeout(()=>{
      this.drawAnimationTop=true;
      },400);
    this.game.played.push(this.card);
    this.game.currentCard=this.card;
  }

  mouseStuff(){
    const mouseEvent = new Event('mouseenter');
    const stack = document.getElementById("stackTable");
    stack.style.pointerEvents="none";
    setTimeout(()=>{
      stack.style.pointerEvents="auto";
      stack.dispatchEvent(mouseEvent);
      },1000);
  }

}
