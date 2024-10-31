import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './event.entity';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  createEvent(@Body() createEventDto: CreateEventDto): Promise<Event> {
    return this.eventsService.createEvent(createEventDto);
  }
  @Get('random')
  getRandomEvent(): Promise<Event> {
    return this.eventsService.getRandomEvent();
  }

  @Get('category')
  getEventsByCategory(@Query('category') category: string): Promise<Event[]> {
    return this.eventsService.findByCategory(category);
  }
}
