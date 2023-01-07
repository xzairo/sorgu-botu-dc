module.exports = {
   name: "info",
 
   async execute(message) {
     const { client } = require("../../app");
     const conf = require("../data/conf");
     const moment = require("moment");
     require("moment-duration-format");
 
     const duration = moment
       .duration(client.uptime)
       .format(" D [gün], H [saat], m [dakika], s [saniye]");
     message.reply(`= İstatistikler =
 • Bellek kullanımı :: ${(process.memoryUsage().heapUsed / 1024 / 512).toFixed(
       2
     )} MB
 • Kullanıcılar     :: ${client.users.cache.size}
 • Sunucular        :: ${client.guilds.cache.size}
 • Kanallar         :: ${client.channels.cache.size}
 • Ping             :: ${client.ws.ping}`);
   },
 };
 