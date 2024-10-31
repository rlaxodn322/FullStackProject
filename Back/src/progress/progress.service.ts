import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Progress } from './progress.entity';
import { Repository } from 'typeorm';
import { CreateProgressDto } from './dto/progress.dto';

@Injectable()
export class ProgressService {
  constructor(
    @InjectRepository(Progress)
    private progressRepository: Repository<Progress>,
  ) {}

  async createProgress(
    createProgressDto: CreateProgressDto,
  ): Promise<Progress> {
    const progress = this.progressRepository.create(createProgressDto);
    return this.progressRepository.save(progress);
  }

  async updateProgress(userId: number, correct: boolean): Promise<Progress> {
    const progress = await this.progressRepository.findOne({
      where: { userId },
    });
    if (progress) {
      progress.quizzesTaken += 1;
      if (correct) {
        progress.correctAnswers += 1;
      }
      return this.progressRepository.save(progress);
    } else {
      const newProgress = this.progressRepository.create({
        userId,
        quizzesTaken: 1,
        correctAnswers: correct ? 1 : 0,
        level: 1,
      });
      return this.progressRepository.save(newProgress);
    }
  }

  async getProgressByUserId(userId: number): Promise<Progress> {
    return this.progressRepository.findOne({ where: { userId } });
  }
}
