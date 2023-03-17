import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const AddSwagger = (app: INestApplication, title: string) => {
  const documentConfig = new DocumentBuilder().setTitle(title).build();
  const document = SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('documents', app, document);
};
