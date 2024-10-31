import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedBack } from './feedback.entity';
import { Repository } from 'typeorm';
import { CreateFeedBackDto } from './dto/create-feedback.dto';

@Injectable()
export class FeedbacksService {
  constructor(
    @InjectRepository(FeedBack)
    private feedBackRepository: Repository<FeedBack>,
  ) {}

  async createFeedback(
    createFeedbackDto: CreateFeedBackDto,
  ): Promise<FeedBack> {
    const feedback = this.feedBackRepository.create(createFeedbackDto);
    return this.feedBackRepository.save(feedback);
  }
}
