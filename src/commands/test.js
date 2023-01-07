// Tanımlayıcılar
const {
   MessageActionRow,
   MessageButton,
   MessageEmbed,
   Formatters,
   Permissions,
 } = require("discord.js");
 const { SlashCommandBuilder } = require("@discordjs/builders");
 
 (module.exports = {
   data: new SlashCommandBuilder().setName("test").setDescription("test alive"),
 
   async execute(interaction) {
      interaction.reply("Test mernis eeAA");
   }
 }),
   (module.exports.options = {
     perms: ["0"],
     cooldown: 10,
   });
 