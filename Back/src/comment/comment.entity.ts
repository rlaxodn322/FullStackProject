import { Recipe } from 'src/recipe/recipe.entity';
import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  content: string;
  @ManyToOne(() => Recipe, (recipe) => recipe.comments)
  recipe: Recipe;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;
}
