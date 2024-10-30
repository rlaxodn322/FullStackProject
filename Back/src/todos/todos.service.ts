import { Injectable } from '@nestjs/common';
import { Todo } from './todos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  findAll(): Promise<Todo[]> {
    return this.todoRepository.find({ relations: ['user'] });
  }

  async create(userId: number, todoData: any): Promise<Todo> {
    const user = await this.userRepository.findOne({where:{id: userId}});
    if (!user) {
      throw new Error('User not dound');
    }
    const todo = new Todo();
    todo.title = todoData.title;
    todo.description = todoData.description;
    todo.completed = todoData.completed || false;
    todo.user = user;
    return this.todoRepository.save(todo);
  }

  findOne(id: number): Promise<Todo> {
    return this.todoRepository.findOne({ where: { id }, relations: ['user'] });
  }
  async update(id: number, todoData: any): Promise<void> {
    await this.todoRepository.update(id, todoData);
  }
  async remove(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
