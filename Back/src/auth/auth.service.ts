import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, pass: string, done: any) {
    // 사용자 인증 로직
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return this.jwtService.sign(payload);
  }

  async validateUserToken(payload: any) {
    // 토큰 유효성 검사 로직
  }
}
