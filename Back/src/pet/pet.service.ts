import { Injectable, NotFoundException } from '@nestjs/common';
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
    pet.hunger = Math.min(pet.hunger + 10, 100);
    return this.petRepository.save(pet);
  }
  async playWithPet(id: number): Promise<Pet> {
    const pet = await this.findPetById(id);
    if (pet.energy >= 20) {
      pet.happiness = Math.min(pet.happiness + 10, 100);
      pet.energy -= 20;
      pet.expreience += 5;
      await this.checkLevelUp(pet);
    }
    return this.petRepository.save(pet);
  }
  async restPet(id: number): Promise<Pet> {
    const pet = await this.findPetById(id);
    pet.energy = Math.min(pet.energy + 30, 100);
    return this.petRepository.save(pet);
  }
  async trainPet(id: number): Promise<Pet> {
    const pet = await this.findPetById(id);
    if (pet.energy >= 30) {
      pet.expreience += 15;
      pet.energy -= 30;
      await this.checkLevelUp(pet);
    }
    return this.petRepository.save(pet);
  }

  private async checkLevelUp(pet: Pet) {
    const experienceNeeded = (pet.level + 1) * 100;
    if (pet.expreience >= experienceNeeded) {
      pet.level++;
      pet.expreience = pet.expreience - experienceNeeded;
    }
  }
  async updatePet(id: number, updatePetDto: UpdatePetDto): Promise<Pet> {
    const pet = await this.findPetById(id);
    Object.assign(pet, updatePetDto);
    return this.petRepository.save(pet);
  }

  public async findPetById(id: number): Promise<Pet> {
    const pet = await this.petRepository.findOne({ where: { id } });
    if (!pet) {
      throw new NotFoundException(`Pet with id ${id} not found`);
    }
    return pet;
  }
}
