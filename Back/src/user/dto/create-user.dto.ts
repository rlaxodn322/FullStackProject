import { IsArray, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  location: string;

  @IsArray()
  interests: string[];

  @IsString()
  adventurePreference: string;
}
