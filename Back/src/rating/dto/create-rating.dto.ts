import { IsNumber } from 'class-validator';

export class CreateRatingDto {
  @IsNumber()
  score: number;
  @IsNumber()
  recipeId: number;
  @IsNumber()
  userId: number;
}
