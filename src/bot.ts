import * as logger from "./logger";
import { Client } from "discord.js";
const bot = new Client({ intents: ["Guilds", "GuildMessages"] });
bot
  .login(process.env.BOT_TOKEN)
  .then(() => {
    logger.info("Discord", "\x1b[32;1m" + "Logged in as", "\x1b[35m" + bot.user?.username);
  })
  .catch((err) => {
    if (err.code == "TokenInvalid") {
      logger.fatal("Discord", "\x1b[31m" + err.message);
    } else {
      logger.fatal("Discord", "\x1b[31m" + "Unhandled", err);
    }
    process.exit(1);
  });
export default bot;
