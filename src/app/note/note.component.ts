import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note: Note;
  @Output() savedNote: EventEmitter<Note> = new EventEmitter<Note>();

  userEvent: string;
  isEdit = false;

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

  save(newTitle: string) {
    this.userEvent = 'Save';
    this.isEdit = false;
    const newNote = new Note(this.note.id, newTitle);
    this.savedNote.emit(newNote);
  }
}
