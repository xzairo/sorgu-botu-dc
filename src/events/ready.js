const { client } = require("../../app");
const conf = require("../data/conf");

client.on("ready", async (client) => {

const statusArray = [
   {
     type: "LISTENING",
     content: `/sorguisimtodatatr | 2022 GÜNCEL DATA!`,
     status: "dnd",
   },
   {
     type: "WATCHING",
     content: `Prod by Waldo & Nietzsche v5.67`,
     status: "dnd",
   },
   {
     type: "WATCHING",
     content: `/seks | Version: v5.67`,
     status: "dnd",
   },
   {
     type: "WATCHING",
     content: `Prod by Waldo & Nietzsche v5.67`,
     status: "dnd",
   },
 ];
 async function pickPresence() {
   const option = Math.floor(Math.random() * statusArray.length);
   try {
     await client.user.setPresence({
       activities: [
         {
           name: statusArray[option].content,
           type: statusArray[option].type,
           url: statusArray[option].url,
         },
       ],
       status: statusArray[option].status,
     });
   } catch (error) {
     console.error(error);
   }
 }

 pickPresence();
 setInterval(pickPresence, 1000 * 30 * 1);

 console.log("🆔[LOGIN/READY]Logged as: " + client.user.username);

});