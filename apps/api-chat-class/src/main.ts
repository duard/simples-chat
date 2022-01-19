import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = config.get('api_chatclass.port') || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on [${config.get(
      'NODE_ENV'
    )}] : http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
