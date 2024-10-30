import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { access } from 'fs';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: any) {
    const payload = { username: user.username, sub: user.userId };
    return this.authService
      .generateToken(payload)
      .then((access_token) => ({ access_token }))
      .catch((error) => {
        throw new Error('Failed to generate access token');
      });
    // return {

    //   access_token: await this.authService.generateToken(payload),
    // };
  }
}
