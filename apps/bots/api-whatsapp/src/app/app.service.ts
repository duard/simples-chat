import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMsg(): { message: string } {
    return { message: 'Welcome to api-whatsapp! goiabada' };
  }
}
