import { Body, Controller, Post } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { Reservation } from './reservation.entity';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationService: ReservationsService) {}

  @Post()
  createReservation(
    @Body() createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    return this.reservationService.createReservation(createReservationDto);
  }
}
