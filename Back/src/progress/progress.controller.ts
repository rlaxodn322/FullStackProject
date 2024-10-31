import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { CreateProgressDto } from './dto/progress.dto';
import { Progress } from './progress.entity';

@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Post()
  createProgress(
    @Body() createProgressDto: CreateProgressDto,
  ): Promise<Progress> {
    return this.progressService.createProgress(createProgressDto);
  }
  @Post(':userId/update')
  updateProgress(
    @Param('userid') userId: number,
    @Body('correct') correct: boolean,
  ): Promise<Progress> {
    return this.progressService.updateProgress(userId, correct);
  }
  @Get(':userId')
  getProgress(@Param('userId') userId: number): Promise<Progress> {
    return this.progressService.getProgressByUserId(userId);
  }
}
