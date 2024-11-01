import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from './recipe.entity';
import { Repository } from 'typeorm';
import { Ingredient } from './ingredient.entity';
import { CreateRecipeDto } from './dto/create-recipe.dto';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private recipeRepository: Repository<Recipe>,
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}

  async createRecipe(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const ingredients = await this.ingredientRepository.findByIds(
      createRecipeDto.ingredients,
    );
    const recipe = this.recipeRepository.create({
      ...createRecipeDto,
      ingredients,
    });
    return this.recipeRepository.save(recipe);
  }

  async getRandomIngredients(): Promise<Ingredient[]> {
    const ingredients = await this.ingredientRepository.find();
    return ingredients.sort(() => 0.5 - Math.random()).slice(0, 3);
  }

  async likeRecipe(recipeId: number): Promise<Recipe> {
    const recipe = await this.recipeRepository.findOneOrFail({
      where: { id: recipeId },
    });
    recipe.likes += 1;
    return this.recipeRepository.save(recipe);
  }
}
