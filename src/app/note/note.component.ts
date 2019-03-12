import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  userEvent: string;
  isEdit = false;
  title = 'Hello Angular';

  constructor() { }

  ngOnInit() {
  }

  edit() {
    this.userEvent = 'Edit';
    this.isEdit = true;
  }

  remove() {
    this.userEvent = 'Remove';
  }

  save(newTitle) {
    this.title = newTitle;
    this.userEvent = 'Save';
    this.isEdit = false;
  }
}
