import { Module } from '@nestjs/common';
import { AdventuresController } from './adventures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adventure } from './adventures.entity';
import { AdventuresService } from './adventures.service';

@Module({
  imports: [TypeOrmModule.forFeature([Adventure])],
  providers: [AdventuresService],
  controllers: [AdventuresController],
})
export class AdventuresModule {}
