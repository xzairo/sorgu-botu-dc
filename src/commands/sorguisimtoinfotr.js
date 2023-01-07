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
const { DiscordAPIError } = require("@discordjs/rest");
const { ThreadAutoArchiveDuration } = require("discord-api-types/v10");

 (module.exports = {
   data:  new SlashCommandBuilder()
   .setName("sorguisimtoinfotr")
   .setDescription("İSİM ---> TÜRK VATANDAŞI DATA çevirir.")
   .addStringOption((option) =>
     option
       .setName("isim")
       .setDescription("sorgulancak isim")
       .setRequired(true)
   )
   .addStringOption((option) =>
   option
     .setName("soyisim")
     .setDescription("sorgulancak soyisim")
     .setRequired(true)
 ),
 
   async execute(interaction) {

    let sorguIsim = await interaction.options.getString("isim");
    let sorguSoyisim = await interaction.options.getString("soyisim");

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "atabey1221",
  database: 'testdatas'
});

var askQuest = "x"
if (sorguSoyisim == null || sorguSoyisim == undefined) askQuest = "SELECT * FROM `adsoyadtrsorgu` WHERE ad = '" + sorguIsim + "';";
if (sorguSoyisim != null || sorguSoyisim != undefined) askQuest = "SELECT * FROM `adsoyadtrsorgu` WHERE ad = '" + sorguIsim + "' AND soyad = '" + sorguSoyisim + "';"
// simple query
connection.query(
  askQuest,
  async function(err, results, fields) {
    console.log(results); // results contains rows returned by server

    let itt = results.values()

    let arrName = []
    let arrSurn = []
    let arrTc = []
    let arrDt = []
    let arrCins = []

    for (const value of itt) {
      arrName.push(JSON.stringify(value.ad))
      arrSurn.push(JSON.stringify(value.soyad))
      arrTc.push(JSON.stringify(value.tc))
      arrDt.push(JSON.stringify(value.dogum_tarihi))
      arrCins.push(JSON.stringify(value.cinsiyet))
    };

    await console.log(arrName);

    const embed = new MessageEmbed()
    .addFields(
      {
        name: "SORGULANAN ISIM",
        value: sorguIsim.toString()
      },
      {
        name: "SORGULANAN SOYISIM",
        value: sorguSoyisim.toString()
      },
      {
        name: "ÇIKAN İSİM(LER)",
        value: codeBlock(arrName.toString().replace(",", "\n")),
        inline: true
      },
      {
        name: "ÇIKAN SOYİSİM(LER)",
        value: codeBlock(arrSurn.toString().replace(",", "\n")),
        inline: true
      },
      {
        name: "ÇIKAN TC(LER)",
        value: codeBlock(arrTc.toString().replace(",", "\n")),
        inline: true
      },
      {
        name: "ÇIKAN DOĞUM TARİH(LER)İ",
        value: codeBlock(arrDt.toString().replace(",", "\n")),
        inline: true
      },
      {
        name: "ÇIKAN CİNSİYET(LER)",
        value: codeBlock(arrCins.toString().replace(",", "\n")),
        inline: true
      }
    )
    .setColor("GREEN")
    .setAuthor({
      name: "Sh4re Sorgu v5.67",
      iconURL: "https://cdn.discordapp.com/attachments/1042165573305499688/1042165641525874758/4c2b8b5e0b69d4869e8c31102a1f60ab.webp"
    })
    .setFooter({
     text: "sh4re sorgu by Nietzsche v5.67",
     iconURL: "https://cdn.discordapp.com/attachments/1042165573305499688/1042165641525874758/4c2b8b5e0b69d4869e8c31102a1f60ab.webp"
    });
  await interaction.reply({content: "Çıkan İSİM ---> TC listesi aşağıdaki gibidir.", embeds: [embed], ephemeral: true});//result[0] ilk datayı alır bunun içindeki numbere karşılık değeri yazdırır.
    //console.log(fields); // fields contains extra meta data about results, if available
  }
);




   }
 });
   (module.exports.options = {
     perms: ["0"],
     cooldown: 10,
   });
 