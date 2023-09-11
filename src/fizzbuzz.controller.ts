import { Controller, Get, Param } from '@nestjs/common';
import { FizzbuzzService } from './fizzbuzz.service';

@Controller('fizzbuzz')
export class FizzbuzzController {
  constructor(private readonly FizzbuzzService: FizzbuzzService) {}

  @Get(':number')
  fizzbuzz(@Param('number') number): any {
  return this.FizzbuzzService.fizzbuzz(number)

  }

  }

