const Discord = require('discord.js');

module.exports = {
name: 'avatar',
aliases: ['icon'],
category: 'Info',
utilisation: '{prefix}avatar <user_mention>',

execute(client, message, args) {

if(!message.mentions.users.size) {

const author_avatar_embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`${message.author.username}\`s Avatar`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`)
    .setDescription('You\`re beautiful 😍💖')
    .setImage(`${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`)
    .setTimestamp()
    .setFooter(`Command executed by: ${message.author.username}`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
message.channel.send(author_avatar_embed);
return;

}

else{

const avatarList = message.mentions.users.map(user => {
const mention_user_avatar = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`${user.username}\`s Avatar`, `${user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`, `${user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`)
    .setDescription('You\`re beautiful 😍💖')
    .setImage(`${user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`)
    .setTimestamp()
    .setFooter(`Command executed by: ${message.author.username}`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
message.channel.send(mention_user_avatar);
return;

            });
        }
    },
};