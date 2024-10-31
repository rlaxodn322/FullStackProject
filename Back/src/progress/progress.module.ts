import { Module } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { ProgressController } from './progress.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Progress } from './progress.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Progress])],
  providers: [ProgressService],
  controllers: [ProgressController],
})
export class ProgressModule {}
