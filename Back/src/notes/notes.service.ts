import { Injectable } from '@nestjs/common';
import { Note } from './notes.entity';

@Injectable()
export class NotesService {
  private notes: Note[] = [];
  private idCounter = 1;

  create(note: Note): Note {
    note.id = this.idCounter++;
    this.notes.push(note);
    return note;
  }
  findAll(): Note[] {
    return this.notes;
  }
  findOne(id: number): Note {
    return this.notes.find((note) => note.id === id);
  }
  update(id: number, updateNote: Note): Note {
    const noteIndex = this.notes.findIndex((note) => note.id === id);
    if (noteIndex > -1) {
      this.notes[noteIndex] = { ...this.notes[noteIndex], ...updateNote };
      return this.notes[noteIndex];
    }
    return null;
  }
  delete(id: number): void {
    this.notes = this.notes.filter((note) => note.id != id);
  }
}
