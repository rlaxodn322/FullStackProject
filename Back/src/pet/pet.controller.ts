import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}
  @Get(':id')
  async getPetStatus(@Param('id') id: number) {
    return this.petService.findPetById(id);
  }
  @Post()
  async createPet(@Body() createPetDto: CreatePetDto) {
    return this.petService.createPet(createPetDto.name, createPetDto.type);
  }
  @Patch(':id/feed')
  async feedPet(@Param('id') id: number) {
    return this.petService.feedPet(id);
  }
  @Patch(':id/play')
  async playWithPet(@Param('id') id: number) {
    return this.petService.playWithPet(id);
  }
  @Patch(':id/rest')
  async restPet(@Param('id') id: number) {
    return this.petService.restPet(id);
  }
  @Patch(':id/train')
  async trainPet(@Param('id') id: number) {
    return this.petService.trainPet(id);
  }

  @Patch()
  async feddPet(@Param('id') id: number) {
    return this.petService.feedPet(id);
  }
  @Patch(':id/update')
  async updatePet(@Param('id') id: number, @Body() updatePetDto: UpdatePetDto) {
    return this.petService.updatePet(id, updatePetDto);
  }
}
