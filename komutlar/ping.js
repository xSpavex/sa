const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

module.exports.run = async (client, message, args) => {
  if(message.author.bot) return;
  
  let prefix = ayarlar.prefix;
  
  if(!message.content.startsWith(prefix)) return;
  
  const ping = await message.channel.send("Hesaplanıyor...")
  
  let embed = new Discord.MessageEmbed()
  .setTitle("🏓 Pong!")
  .setColor('RANDOM')
  .setTimestamp()
  .setDescription(`Gecikme: **${ping.createdTimestamp - message.createdTimestamp}**ms
  	API Gecikme: **${Math.round(client.ws.ping)}**ms`)
  .setFooter(`Bu komutu kullanan kullanıcı ${message.author.tag}`, message.author.displayAvatarURL());

  ping.edit(embed)
}

exports.conf = {
  aliases: [],
  permLevel: 0,
};
exports.help = {
  name: 'ping',
   description: 'Ping Atar.',
  usage: 'ping'
};