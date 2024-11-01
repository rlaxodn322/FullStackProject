import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rating } from './rating.entity';
import { Repository } from 'typeorm';
import { CreateRatingDto } from './dto/create-rating.dto';

@Injectable()
export class RatingService {
  constructor(
    @InjectRepository(Rating) private ratingRepository: Repository<Rating>,
  ) {}

  async createRating(createRatingDto: CreateRatingDto): Promise<Rating> {
    const rating = this.ratingRepository.create(createRatingDto);
    return this.ratingRepository.save(rating);
  }
  async getRatingsForRecipe(recipeId: number): Promise<Rating[]> {
    return this.ratingRepository.find({ where: { recipe: { id: recipeId } } });
  }
}
