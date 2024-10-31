import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { Media } from './media.entity';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  createMedia(@Body() createMediaDto: CreateMediaDto): Promise<Media> {
    return this.mediaService.createMedia(createMediaDto);
  }

  @Get()
  findAll(): Promise<Media[]> {
    return this.mediaService.findAll();
  }
  @Get(':id')
  findById(@Param('id') id: number): Promise<Media> {
    return this.mediaService.findById(id);
  }
  @Get('recommend/:genre')
  recommendMedia(@Param('genre') genre: string): Promise<Media[]> {
    return this.mediaService.recommendMedia(genre);
  }
}
