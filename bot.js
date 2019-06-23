const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("592467678640472064")
setInterval(function() {
channel.send(`Mounim free credits`);
}, 30)
})

client.login(process.env.BOT_TOKEN);