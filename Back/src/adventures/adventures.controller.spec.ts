import { Test, TestingModule } from '@nestjs/testing';
import { AdventuresController } from './adventures.controller';

describe('AdventuresController', () => {
  let controller: AdventuresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdventuresController],
    }).compile();

    controller = module.get<AdventuresController>(AdventuresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
