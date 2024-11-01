import { Recipe } from 'src/recipe/recipe.entity';
import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  score: number;
  @ManyToOne(() => Recipe, (recipe) => recipe.ratings)
  recipe: Recipe;
  @ManyToOne(() => User, (user) => user.ratings)
  user: User;
}
