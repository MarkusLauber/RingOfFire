export class Game{
    public players: string[]=[];
    public stack: string[]=[];
    public played: string[]=[];
    public currentPlayer: number=0;
    public currentCard: string="";

    constructor(){
        for (let i=1; i <= 13; i++){
            this.stack.push("spades_"+i);
            this.stack.push("diamonds_"+i);
            this.stack.push("hearts_"+i);
            this.stack.push("clubs_"+i);
            }
        shuffle(this.stack)
    }
}

function shuffle(array:string[]) {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}