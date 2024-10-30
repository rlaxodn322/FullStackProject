import { Todo } from '../todos/todos.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: String;

  @Column({ unique: true })
  email: String;

  @Column()
  password: String;

  @OneToMany(() => Todo, (todo) => todo.user)
  todo: Todo[];
}
