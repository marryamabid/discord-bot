require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    message.reply({
      content: "Creaing a new command for url" + url,
    });
    message.reply({
      content: "hi from bot",
    });
  }
});
client.on("interactionCreate", (interaction) => {
  interaction.reply("Pong!!");
});
client.login(process.env.DISCORD_BOT_TOKEN);
