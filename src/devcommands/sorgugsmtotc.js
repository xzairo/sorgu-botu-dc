// Tanımlayıcılar
const {
   MessageActionRow,
   MessageButton,
   MessageEmbed,
   Formatters,
   Permissions,
 } = require("discord.js");
 const { SlashCommandBuilder, codeBlock } = require("@discordjs/builders");

 const fetch = require("node-fetch");
const Keyv = require("@keyvhq/core");
const KeyvMysql = require("@keyvhq/mysql");

 (module.exports = {
   data:  new SlashCommandBuilder()
   .setName("sorgugsmtotc")
   .setDescription("GSM ---> TC çevirir.")
   .addStringOption((option) =>
     option
       .setName("no")
       .setDescription("sorgulancak no")
       .setRequired(true)
   ),
 
   async execute(interaction) {

    let sorgulanacak = await interaction.options.getString("no");

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "atabey1221",
  database: 'testdatas'
});

// simple query
connection.query(
  "SELECT * FROM numberTable WHERE numbertable.phone = '" + sorgulanacak + "'",
  async function(err, results, fields) {
    console.log(results); // results contains rows returned by server

    const embed = new MessageEmbed()
    .addFields(
      {
        name: "SORGULANAN NUMARA",
        value: codeBlock(sorgulanacak.toString())
      },
      {
        name: "ÇIKAN TC SONUCU",
        value: codeBlock(results[0].numberrange)
      }
    )
    .setColor("GREEN")
    .setAuthor({
      name: "Sh4re Sorgu v5.67",
      iconURL: "https://cdn.discordapp.com/attachments/1042165573305499688/1042165641525874758/4c2b8b5e0b69d4869e8c31102a1f60ab.webp"
    });
  await interaction.reply({content: "Çıkan GSM ---> TC Data listesi aşağıdaki gibidir.", embeds: [embed], ephemeral: false});//result[0] ilk datayı alır bunun içindeki numbere karşılık değeri yazdırır.
  }
);




   }
 });
   (module.exports.options = {
     perms: ["0"],
     cooldown: 10,
   });
 