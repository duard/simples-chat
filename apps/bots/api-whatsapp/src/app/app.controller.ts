import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    console.log('=> Variavel ', process.env.VAR_C);
    console.log('=> :: APPLICATION_NAME :: ', process.env.APPLICATION_NAME);
    console.log(':: VARIABLE_TESTE ::', process.env.VARIABLE_TESTE)
    return this.appService.getData();
  }
}
