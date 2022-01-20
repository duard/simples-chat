import { Context } from '@chatclass-org/api/share';
import { Hears, Help, On, Start, Update } from 'nestjs-telegraf';

@Update()
export class AppService {
  constructor() {
    console.log('--------');
  }

  @On('sticker')
  async onSticker(ctx: Context): Promise<void> {
    console.log('onSticker => ', ctx);
    await ctx.reply('👍');
  }

  @Start()
  async startCommand(ctx: Context): Promise<void> {
    console.log('startCommand => ', ctx);
    await ctx.reply('Welcome');
  }

  @Help()
  async helpCommand(ctx: Context): Promise<void> {
    console.log('helpCommand => ', ctx);
    await ctx.reply('Send me a sticker');
  }

  @Hears('ola')
  async hearsHi(ctx: any): Promise<void> {
    console.log(ctx)
    await ctx.reply(`Ola ${ctx.message.chat.first_name}`);
  }
}
