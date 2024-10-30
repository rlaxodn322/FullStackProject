import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  // 사용자 관련 비즈니스 로직 작성
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: ['todo'] });
  }
  create(userData: any): Promise<User> {
    return this.userRepository.save(userData);
  }
  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id }, relations: ['todo'] });
  }
  remove(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
