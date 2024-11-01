import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './recipe.entity';
import { Ingredient } from './ingredient.entity';
import { Rating } from 'src/rating/rating.entity';
import { Comment } from 'src/comment/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe, Ingredient, Rating, Comment])],
  providers: [RecipeService],
  controllers: [RecipeController],
})
export class RecipeModule {}
