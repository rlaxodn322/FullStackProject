import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post()
  async createPet(@Body() createPetDto: CreatePetDto) {
    return this.petService.createPet(createPetDto.name, createPetDto.type);
  }
  @Patch()
  async feddPet(@Param('id') id: number) {
    return this.petService.feedPet(id);
  }
  @Patch(':id/update')
  async updatePet(@Param('id') id:number, @Body() updatePetDto:UpdatePetDto){
    return this.petService.updatePet(id, updatePetDto);
  }
}
