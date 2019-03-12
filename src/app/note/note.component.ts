import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  userEvent: string;

  constructor() { }

  ngOnInit() {
  }

  edit() {
    this.userEvent = 'Edit';
  }

  remove() {
    this.userEvent = 'Remove';
  }
}
