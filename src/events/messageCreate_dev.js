const conf = require("../data/conf.json");
const {
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  Formatters,
} = require("discord.js");
const { client } = require("../../app");

client.on("messageCreate", async (message) => {
  const prefix = conf.ownerData.devprefix;
  const owners = conf.ownerData.ownerids;

  if (!message.content.startsWith(prefix)) return;
  if (!owners.includes(message.author.id)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.devcommands.get(commandName);
  if (!command) return;

  try {
    await command.execute(message);
  } catch (error) {
    console.error(error);
  }
});
