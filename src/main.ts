import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AddSwagger } from '@utils/swagger.util';
import { ValidationPipe } from '@nestjs/common';
import { MaskedBadRequestException } from '@filters/MaskedBadRequestException.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new MaskedBadRequestException());

  AddSwagger(app, 'API');
  await app.listen(3001);
  console.log('http://localhost:3001/documents');
}

bootstrap();
