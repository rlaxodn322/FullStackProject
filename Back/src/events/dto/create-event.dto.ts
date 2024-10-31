import { IsDate, isNumber, IsString, isString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  location: string;
  @IsDate()
  date: Date;
  @IsString()
  category: string;
}
