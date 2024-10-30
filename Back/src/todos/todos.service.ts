import { Injectable } from '@nestjs/common';
import { Todo } from './todos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';
import { NotificationsService } from 'src/notifications/notifications.service';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private notificationsService: NotificationsService,
  ) {}
  findAll(): Promise<Todo[]> {
    return this.todoRepository.find({ relations: ['user'] });
  }

  async create(userId: number, todoData: any): Promise<Todo> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not dound');
    }
    const todo = new Todo();
    todo.title = todoData.title;
    todo.description = todoData.description;
    todo.completed = todoData.completed || false;
    todo.user = user;
    await this.todoRepository.save(todo);
    await this.notificationsService.sendEmail(
      user.email,
      `새로운 TO-DO 항목 생성`,
      `TO-DO: ${todo.title}`,
    );
    return todo;
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
