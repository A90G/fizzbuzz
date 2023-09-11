import { NestFactory } from '@nestjs/core';
import { FizzbuzzModule } from './fizzbuzz.module';

async function bootstrap() {
  const app = await NestFactory.create(FizzbuzzModule);
  await app.listen(3000);
}
bootstrap();
