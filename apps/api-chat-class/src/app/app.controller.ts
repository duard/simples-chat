import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('sendMsg')
  sendMsg(@Body() body) {
    return this.appService.sendMsg(body);
  }

  @Get('/greeting')
  async getHello() {
    return this.appService.getHello();
  }

  @Get('/greeting-async')
  async getHelloAsync() {
    return this.appService.getHelloAsync();
  }

  @Get('/publish-event')
  async publishEvent() {
    this.appService.publishEvent();
  }
}
