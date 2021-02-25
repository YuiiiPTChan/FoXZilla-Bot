const Discord = require('discord.js');

module.exports = {
name: 'ping',
aliases: ['uptime', 'debug'],
category: 'Info',
utilisation: '{prefix}ping',

execute(client, message, args) {

function duration(ms) { 
    const sec = Math.floor(ms / 1000 % 60).toString();
    const min = Math.floor(ms / (60*1000) % 60).toString();
    const hrs = Math.floor(ms / (60*60*1000) % 60).toString();
    const days = Math.floor(ms / (24*60*60*1000) % 60).toString();
    return `\`${days} Days\`, \`${hrs} Hours\`, \`${min} Minutes\`, \`${sec} Seconds\``
}

const ping_embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setAuthor('Pong🏓!', '', '')
	.setThumbnail('https://i.pinimg.com/originals/ff/f5/b3/fff5b33219a97a091c46f9364409ccfb.png')
	.addField('Bot Latency:', `\`${Date.now() - message.createdTimestamp}\`ms`, false)
    .addField('Bot connection to API Latency:', `\`${Math.round(client.ws.ping)}\`ms`, false)
    .addField('Bot Uptime:', `${duration(client.uptime)}`, false)
    .addField('Connections in voice chats:', `\`${client.voice.connections.size}\` channels`, false)
	.setTimestamp()
    .setFooter(`Command executed by: ${message.author.username}`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
message.channel.send(ping_embed);

    },
};