import { Module } from '@nestjs/common';
import { FizzbuzzController } from './fizzbuzz.controller';
import { FizzbuzzService } from './fizzbuzz.service';

@Module({
  imports: [], // Deja este arreglo vacío o elimínalo si no necesitas importar otros módulos.
  controllers: [FizzbuzzController],
  providers: [FizzbuzzService],
})
export class FizzbuzzModule {}
