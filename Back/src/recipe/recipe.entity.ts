import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ingredient } from './ingredient.entity';
import { Rating } from 'src/rating/rating.entity';
import { Comment } from 'src/comment/comment.entity';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @ManyToMany(() => Ingredient)
  @JoinTable()
  ingredients: Ingredient[];

  @Column({ default: 0 })
  likes: number;

  @OneToMany(() => Rating, (rating) => rating.recipe)
  ratings: Rating[];

  @OneToMany(() => Comment, (comment) => comment.recipe)
  comments: Comment[];
}
