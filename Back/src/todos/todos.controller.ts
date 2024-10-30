import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll() {
    return this.todosService.findAll();
  }
  @Post(':userId')
  create(@Param('userId') userId: number, @Body() todoData) {
    return this.todosService.create(userId, todoData);
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.todosService.findOne(id);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() todoData) {
    return this.todosService.update(id, todoData);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.todosService.remove(id);
  }
}
