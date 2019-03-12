import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  title = 'Default Note';
  notes = [
    {
      id: 1,
      title: 'Note 1'
    },
    {
      id: 2,
      title: 'Note 2'
    },
    {
      id: 3,
      title: 'Note 3'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
