import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private petRepository: Repository<Pet>,
  ) {}

  createPet(name: string, type: string): Promise<Pet> {
    const pet = this.petRepository.create({ name, type });
    return this.petRepository.save(pet);
  }

  async feedPet(id: number): Promise<Pet> {
    const pet = await this.petRepository.findOneBy({ id });
    pet.humger = Math.max(0, pet.humger - 10);
    return this.petRepository.save(pet);
  }
  updatePet(id: number, updatePetDto: UpdatePetDto) {
    throw new Error('Method not implemented.');
  }
}
