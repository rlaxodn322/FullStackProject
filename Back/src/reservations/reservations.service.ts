import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './reservation.entity';
import { Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}

  async createReservation(
    createReservation: CreateReservationDto,
  ): Promise<Reservation> {
    const reservation = this.reservationRepository.create(createReservation);
    return this.reservationRepository.save(reservation);
  }
}
