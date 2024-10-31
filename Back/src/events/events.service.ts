import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
  ) {}

  async createEvent(createEvent: CreateEventDto): Promise<Event> {
    const event = this.eventsRepository.create(createEvent);
    return this.eventsRepository.save(event);
  }

  async getRandomEvent(): Promise<Event> {
    const events = await this.eventsRepository.find();
    const readomIndex = Math.floor(Math.random() * events.length);
    return events[readomIndex];
  }
  async findByCategory(category: string): Promise<Event[]> {
    return this.eventsRepository.find({ where: { category } });
  }
}
