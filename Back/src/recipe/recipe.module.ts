import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './recipe.entity';
import { Ingredient } from './ingredient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe, Ingredient])],
  providers: [RecipeService],
  controllers: [RecipeController],
})
export class RecipeModule {}
