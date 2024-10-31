import { IsNumber, IsString } from 'class-validator';

export class CreateFeedBackDto {
  @IsNumber()
  eventId: number;

  @IsNumber()
  userId: number;

  @IsString()
  comment: string;
}
