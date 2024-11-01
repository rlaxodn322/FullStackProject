import { Rating } from 'src/rating/rating.entity';
import { Todo } from '../todos/todos.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from 'src/comment/comment.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Todo, (todo) => todo.user)
  todo: Todo[];
  @OneToMany(() => Rating, (rating) => rating.user)
  ratings: Rating[];
  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
