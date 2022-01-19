import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {name: 'GREETING_SERVICE',transport: Transport.REDIS,
      options : {
        url: 'redis://localhost:6380',
      }
    }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
