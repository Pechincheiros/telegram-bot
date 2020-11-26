import { NowRequest, NowResponse } from '@vercel/node';
import Telegraf from 'telegraf';
import { Bot } from '../telegram/bot';

const telegraf = new Telegraf(process.env.BOT_TOKEN, {
  telegram: {
    webhookReply: true
  }
});

telegraf.use(Bot);

export default (request: NowRequest, response: NowResponse) =>
  telegraf.handleUpdate(request.body, response);