import { Composer } from "telegraf";

export const Bot = new Composer();

Bot.start((context) => context.reply('Ok!'));