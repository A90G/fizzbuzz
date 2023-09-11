import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzController } from './fizzbuzz.controller';
import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzController', () => {
  let controller: FizzbuzzController;

  beforeEach(async () => {
    const fizzbuzz: TestingModule = await Test.createTestingModule({
      controllers: [FizzbuzzController],
      providers: [FizzbuzzService],
    }).compile();

    controller = fizzbuzz.get<FizzbuzzController>(FizzbuzzController);
  });

  test("probamos si es múltiplo de 3 con fizz", () => {
    expect(controller.fizzbuzz(3git checkout -b mi-rama)).toBe("fizz");
  })


    it('should return be defined', () => {
      expect(controller).toBeDefined();
    });
  });

