import { Body, Controller, Post } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { CreateFeedBackDto } from './dto/create-feedback.dto';
import { FeedBack } from './feedback.entity';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly feedbackService: FeedbacksService) {}

  @Post()
  createFeedBack(
    @Body() createFeedBackDto: CreateFeedBackDto,
  ): Promise<FeedBack> {
    return this.feedbackService.createFeedback(createFeedBackDto);
  }
}
