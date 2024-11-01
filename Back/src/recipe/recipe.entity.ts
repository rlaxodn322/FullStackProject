import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ingredient } from './ingredient.entity';

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
}
