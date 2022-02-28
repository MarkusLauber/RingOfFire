import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { CardComponent } from 'src/app/card/card.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  game: Game;

  constructor() {this.game = new Game()}

  ngOnInit(): void {

  }

  newGame(){
    ;
    console.log(this.game);
  }




}
