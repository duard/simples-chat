import { ApiCoreModule } from '@chatclass-org/api/core';
import { Logger, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiCoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    Logger.log(process.env.APPLICATION_NAME, 'Application =>');
  }
}
