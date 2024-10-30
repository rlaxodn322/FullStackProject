import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { access } from 'fs';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: await this.authService.generateToken(payload),
    };
  }
}
