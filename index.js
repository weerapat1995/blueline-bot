const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.TOKEN;

// Create an event listener for messages
client.on("ready", async ()=>{
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("กำลังคิดคำสั่ง", {type : "ใช้คำสั่ง"})
})
client.login(token).catch(err => console.log(err));
