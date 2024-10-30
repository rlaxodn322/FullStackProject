import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './notes.entity';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}
  @Post()
  create(@Body() note: Note): Note {
    return this.notesService.create(note);
  }

  @Get()
  findAll(): Note[] {
    return this.notesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number): Note {
    return this.notesService.findOne(id);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() note: Note): Note {
    return this.notesService.update(id, note);
  }
  @Delete(':id')
  delete(@Param('id') id: number): void {
    this.notesService.delete(id);
  }
}
