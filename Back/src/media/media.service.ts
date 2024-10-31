import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media } from './media.entity';
import { CreateMediaDto } from './dto/create-media.dto';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private mediaRepository: Repository<Media>,
  ) {}

  async createMedia(createMediaDto: CreateMediaDto): Promise<Media> {
    const media = this.mediaRepository.create(createMediaDto);
    return this.mediaRepository.save(media);
  }
  async findAll(): Promise<Media[]> {
    return this.mediaRepository.find();
  }
  async findById(id: number): Promise<Media> {
    return this.mediaRepository.findOneBy({ id });
  }
  async recommendMedia(genre: string): Promise<Media[]> {
    return this.mediaRepository.find({ where: { genre } });
  }
}
