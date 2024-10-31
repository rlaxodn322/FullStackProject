import { IsNumber } from 'class-validator';

export class CreateReservationDto {
  @IsNumber()
  eventId: number;

  @IsNumber()
  userId: number;
}
