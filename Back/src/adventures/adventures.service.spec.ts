import { Test, TestingModule } from '@nestjs/testing';
import { AdventuresService } from './adventures.service';
import { Adventure } from './adventures.entity';
import { AdventurePreferencesDto } from './dto/AdventurePreferences.dto';

describe('AdventureService', () => {
  let service: AdventuresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdventuresService],
    }).compile();

    service = module.get<AdventuresService>(AdventuresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should suggest an adventure based on preferences', () => {
    const mockAdventure: Adventure = {
      id: 1, location: 'mountains', theme: 'hiking',
      title: '',
      description: '',
      duration: 0,
      requirements: []
    };
    service.createAdventure(mockAdventure);

    const preferences: AdventurePreferencesDto = {
      preferredLocation: 'mountains', interests: ['hiking'],
      userId: 0
    };
    const result = service.suggestAdventure(preferences);

    expect(result).toBeDefined();
    expect(result.location).toEqual(preferences.preferredLocation);
    expect(result.theme).toEqual(preferences.interests[0]);
  });
});
