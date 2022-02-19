import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
drawAnimation=false;
  constructor() { }

  ngOnInit(): void {
  }

  drawCard(){
    this.drawAnimation=true;
  }
}
