const Discord = require('discord.js');

module.exports = {
name: 'userinfo',
aliases: ['memberinfo'],
category: 'Info',
utilisation: '{prefix}memberinfo <user_mention>',

execute(client, message, args) {

const inline = true
const status = {
    online: ' `🟢` Online',
    idle: ' `🟠` Idle',
    dnd: ' `🔴` DND',
    offline: ' `⚫️` Offline'
}

const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
const target = message.mentions.users.first() || message.author
const bot = member.user.bot ? '`🤖` Yes' : ' `🙂` No'

const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor('🔍 Member Info')
    .addField('**Tag**', `${member.user.tag}`, inline)
    .setThumbnail(`${target.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`)
    .addField('**ID**', member.user.id, inline)
    .addField('**Nickname**', `${member.nickname !== null ? `Nickname: ${member.nickname}` : 'Nenhum'}`, true)
    .addField('**Bot**', `${bot}`, inline, true)
    .addField('**Status**', `User its \`${member.presence.status}\``, inline, true)
    .addField('**Presence**', `${member.presence.activities[0] ? member.presence.activities[0].name : "User isn't playing"}`, inline, true)
    .addField('**Rules**', `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(' **|** ') || 'Not have rules'}`, true)
    .addField('**Account Created at**', member.user.createdAt)
    .addField('**Join in server at**', member.joinedAt)
	.setTimestamp()
    .setFooter(`Command executed by: ${message.author.username}`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
message.channel.send(embed)

    },
};