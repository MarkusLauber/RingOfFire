import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameValuesService {
  public players: string[]=[];
  public stackArray: string[]=[];
  public played: string[]=[];
  public currentPlayer: number;
  public currentCard: string;
  
  constructor() {
  this.resetGame();
  }

  resetGame() {
    this.players=[];
    this.createStack(this.stackArray);
    this.shuffle(this.stackArray);
    this.played=[];
    this.currentPlayer=null;
    this.currentCard=null;
  }  

  shuffle(array:string[]) {
    let j, x, i;
    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
  return array;
  }

  createStack(array:string[]) {
    for (let i=1; i <= 13; i++){
      array.push("spades_"+i);
      array.push("diamonds_"+i);
      array.push("hearts_"+i);
      array.push("clubs_"+i);
    }
  }
}