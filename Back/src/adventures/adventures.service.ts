import { Injectable } from '@nestjs/common';
import { Adventure } from './adventures.entity';
import { AdventurePreferencesDto } from './dto/AdventurePreferences.Dto';
import { CreateAdventureDto } from './dto/CreateAdventure.Dto';

@Injectable()
export class AdventuresService {
  private adventures: Adventure[] = [];

  //   createAdventure(adventure: Adventure): Adventure {
  //     this.adventures.push(adventure);
  //     return adventure;
  //   }
  createAdventure(createAdventureDto: CreateAdventureDto): Adventure {
    const newAdventure = {
      ...createAdventureDto,
      id: this.adventures.length + 1,
    } as Adventure;

    this.adventures.push(newAdventure);
    return newAdventure;
  }

  suggestAdventure(preferences: AdventurePreferencesDto): Adventure {
    const filterAdventures = this.adventures.filter(
      (adventure) =>
        adventure.location === preferences.preferredLocation &&
        preferences.interests.includes(adventure.theme),
    );
    return filterAdventures[
      Math.floor(Math.random() * filterAdventures.length)
    ];
  }
  getAdventureDetails(id: number): Adventure | undefined {
    return this.adventures.find((adventure) => adventure.id === id);
  }
}
