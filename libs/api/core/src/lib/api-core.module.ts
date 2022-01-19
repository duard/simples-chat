// import { RedisModule } from '@nestjs-modules/ioredis';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { configuration } from './configuration';

// nx bug with NODE_ENV variable https://stackoverflow.com/a/59805161/500439
const ENV = process.env['NODE' + '_ENV'];
// nx bug with NODE_ENV variable https://stackoverflow.com/a/59805161/500439
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      isGlobal: true,
      load: [configuration],
    }),
    // RedisModule.forRoot({
    //   config: {
    //     url: 'redis://localhost:6379',
    //   },
    // }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiCoreModule {}
