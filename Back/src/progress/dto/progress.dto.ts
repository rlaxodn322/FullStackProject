import { IsNumber } from 'class-validator';

export class CreateProgressDto {
  @IsNumber()
  userId: number;
  @IsNumber()
  quizzesTaken: number;
  @IsNumber()
  correctAnswers: number;
  @IsNumber()
  level: number;
}
