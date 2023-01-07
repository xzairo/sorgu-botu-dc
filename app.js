// Tanımlayıcılar
const Discord = require("discord.js");
const { Client, Intents, Collection } = Discord;
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require("fs");
const Keyv = require("@keyvhq/core");
const KeyvMysql = require("@keyvhq/mysql");
const keyv = new Keyv({ store: new KeyvMysql("mysql://root:atabey1221@localhost:3306/testdatas")});

// .env Config Reader
require("dotenv").config({
   path: "./src/data/.env",
 });

 // CLient Init
const client = new Client({

   allowedMentions: { parse: ["users", "roles"], repliedUser: true },
   intents: [
     Intents.FLAGS.GUILD_INTEGRATIONS,
     Intents.FLAGS.GUILD_INVITES,
     Intents.FLAGS.GUILD_MEMBERS,
     Intents.FLAGS.GUILD_MESSAGES,
     Intents.FLAGS.GUILDS
   ],
 });


// Collection Tanımları
module.exports.client = client;
client.events = new Collection();
client.cooldowns = new Collection();
client.commands = new Collection();
client.devcommands = new Collection();

//Loaders\\
//Application Commands Update

// Tanımlama
const commands = []; // Commands adında boş data tutmalık tanım
const commandFiles = fs
  .readdirSync("./src/commands")
  .filter((file) => file.endsWith(".js")); // Commands reading from ./src/commands

// For all commands
for (const file of commandFiles) {
  const command = require(`./src/commands/${file}`);
  commands.push(command.data.toJSON());
}

// RestFULL API
const rest = new REST({ version: "9" }).setToken(`${process.env.TOKEN}`); // Connecting API
//RestFULL API put commands to Discord
rest
  .put(Routes.applicationCommands(`${process.env.CLIENT_ID}`), {
    body: commands,
  })
  .then(() =>
    console.log("🖥️[REST API] Sucessfully commands registered globally.")
  )
  .catch(console.error);

//Command Loader

const cmdFiles = fs
  .readdirSync("./src/commands")
  .filter((file) => file.endsWith(".js"));
for (const file of cmdFiles) {
  const command = require(`./src/commands/${file}`);

  client.commands.set(command.data.name, command);
  console.log(`🗂️[CMD HANDLER] - ${file} was loaded`);
}

// Dev Commands Loader

const cmdFilesdev = fs
  .readdirSync("./src/devcommands")
  .filter((file) => file.endsWith(".js"));
for (const filedev of cmdFilesdev) {
  const commanddev = require(`./src/devcommands/${filedev}`);

  client.devcommands.set(commanddev.name, commanddev);
  console.log(`🗂️[DEV COMMANDS] - ${filedev} was loaded`);
}

// Event Loader

const eventloaded = fs
  .readdirSync("./src/events")
  .filter((file) => file.endsWith(".js"));
for (const eventFile of eventloaded) {
  const event = require(`./src/events/${eventFile}`);

  client.events.set(event.name, event);
  console.log(`▶️[EVENT LOADER] - ${eventFile} was loaded`);
}

// Login
client.login("");