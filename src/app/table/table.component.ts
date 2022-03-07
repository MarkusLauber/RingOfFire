import { Component, OnInit } from '@angular/core';
// import { Game } from 'src/models/game';
import { CardComponent } from 'src/app/card/card.component';
import { GameValuesService } from '../game-values.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  game;
  i:number=1;
  decksize: number[];
  top:number;

  constructor() {
    this.top=51;
    this.game= GameValuesService;
  }

  ngOnInit(): void {
    this.decksize= Array(52).fill(this.i++);
  }

  newGame(){
    // this.game.resetGame();
    console.log(this.game.currentCard);
  }

 


}
