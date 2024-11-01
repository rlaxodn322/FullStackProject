import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { Rating } from './rating.entity';

@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Post()
  createRating(@Body() createRatingDto: CreateRatingDto): Promise<Rating> {
    return this.ratingService.createRating(createRatingDto);
  }
  @Get('recipe/:recipeId')
  getRatingsForRecipe(@Param('recipeId') recipeId: number): Promise<Rating[]> {
    return this.ratingService.getRatingsForRecipe(recipeId);
  }
}
