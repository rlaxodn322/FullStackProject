import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { Recipe } from './recipe.entity';
import { Ingredient } from './ingredient.entity';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  createRecipe(@Body() createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    return this.recipeService.createRecipe(createRecipeDto);
  }
  @Get('random-ingredients')
  getRandomIngredients(): Promise<Ingredient[]> {
    return this.recipeService.getRandomIngredients();
  }

  @Patch(':id/like')
  likeRecipe(@Param('id') recipeId: number): Promise<Recipe> {
    return this.recipeService.likeRecipe(recipeId);
  }
}
