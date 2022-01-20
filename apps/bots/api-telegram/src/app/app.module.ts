import { ApiCoreModule } from '@chatclass-org/api/core';
import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ApiCoreModule,

    TelegrafModule.forRoot({
      token: '5044539804:AAG-sZ-jhCCrWRazpT0PzJ5zl4i3d3TzEmA',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
