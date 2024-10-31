import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdventuresService } from './adventures.service';
import { CreateAdventureDto } from './dto/CreateAdventure.Dto';
import { AdventurePreferencesDto } from './dto/AdventurePreferences.Dto';

@Controller('adventures')
export class AdventuresController {
  constructor(private readonly adventureService: AdventuresService) {}

  @Post()
  createAdventure(@Body() createAdventureDto: CreateAdventureDto) {
    return this.adventureService.createAdventure(createAdventureDto);
  }
  @Post('suggest')
  suggestAdventure(@Body() preferences: AdventurePreferencesDto) {
    return this.adventureService.suggestAdventure(preferences);
  }
  @Get(':id')
  getAdventureDetails(@Param('id') id: number) {
    return this.adventureService.getAdventureDetails(id);
  }
}
