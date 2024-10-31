import { Module } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { FeedbacksController } from './feedbacks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedBack } from './feedback.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FeedBack])],
  providers: [FeedbacksService],
  controllers: [FeedbacksController],
})
export class FeedbacksModule {}
