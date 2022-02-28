import { Component, OnInit } from '@angular/core';
import { TableComponent } from 'src/app/table/table.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  drawAnimationBack = false;
  drawAnimationTop = false;
  currentCard: string=null;
  currentCardImg: string=null;
game: any=null;

  constructor() {
    // this.currentCard = this.game.stack.pop()
    this.currentCardImg = this.currentCard +".png"
   }

  ngOnInit(): void {
  }

  drawCard(){  
    this.drawAnimationBack=true;
    setTimeout(()=>{this.drawAnimationTop=true; this.drawAnimationBack=false},500)
    setTimeout(()=>{this.drawAnimationTop=false},1500)
  }


}
