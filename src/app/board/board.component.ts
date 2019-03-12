import { Component, OnInit } from '@angular/core';
import {Note} from '../note';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
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

  onSavedNote(savednote: Note) {
    this.notes = this.notes.map( note => note.id === savednote.id ? savednote : note );
  }
}
