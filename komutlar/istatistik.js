const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const os = require('os');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = ayarlar.prefix;
    if(!message.content.startsWith(prefix)) return;

    let servercount = client.guilds.cache.size;
    let usercount = client.users.cache.size;
    let channelscount = client.channels.cache.size;
    let platform = os.platform();
    let shard = client.ws.shards.size;
    let NodeVersion = process.version;
    let cores = os.cpus().length;

    let stats = new Discord.MessageEmbed()
    .setTitle(`${client.user.username}`)
    .setColor('RED')
    .addField("Sunucu Sayısı", `${servercount}`, true)
    .addField("Kullanıcı Sayısı", `${usercount}`, true)
    .addField("Kanal Sayısı", `${channelscount}`, true)
    .addField('Platform', `${platform}`, true)
    .addField('Node-Version', `${NodeVersion}`, true)
    .addField('Shards', `${shard}`, true)
    .addField('Cores', `${cores}`, true)
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
    message.channel.send(stats);
};

exports.conf = {
  aliases: ['stats'],
  permLevel: 0,
};
exports.help = {
  name: 'istatistik',
   description: 'Bot İstatistiklerini Gösterir',
  usage: 'istatistik'
};