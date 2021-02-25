const Discord = require('discord.js');

module.exports = {
name: 'serverinfo',
aliases: ['guildinfo'],
category: 'Info',
utilisation: '{prefix}serverinfo',

execute(client, message, args) {

function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
return days + (days == 1 ? " day" : " days") + " ago";

};

const totalOnline =  message.guild.members.cache.filter(member => member.presence.status === 'online');
const totalIdle =  message.guild.members.cache.filter(member => member.presence.status === 'idle');
const totalDND =  message.guild.members.cache.filter(member => member.presence.status === 'dnd');
const totalOffline =  message.guild.members.cache.filter(member => member.presence.status === 'offline');

const serverinfo_embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField("Name", message.guild.name, true)
    .addField("ID", message.guild.id, true)
    .addField("Owner", `<@!${message.guild.owner.user.id}>`, false)
    .addField("Region", message.guild.region, true)
    .addField('Total | Humans | Bots', `${message.guild.members.cache.size} | ${message.guild.memberCount - message.guild.members.cache.filter(m=>m.user.bot).size} | ${message.guild.members.cache.filter(m=>m.user.bot).size}`, false)
    .addField("Members Online", `${totalOnline.size} :green_circle:`, false)
    .addField("Members Idle", `${totalIdle.size} :yellow_circle:`, false)
    .addField("Members DND", `${totalDND.size} :red_circle:`, false)
    .addField("Members Offline", `${totalOffline.size} :black_circle:`, false)
    .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
    .addField("Channels", message.guild.channels.cache.size, true)
    .addField("Roles", message.guild.roles.cache.size, true)
    .addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, false)
    .setFooter(`Command executed by: ${message.author.username}`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`)
    .setTimestamp()
    .setThumbnail(message.guild.iconURL())
message.channel.send(serverinfo_embed);

    },
};