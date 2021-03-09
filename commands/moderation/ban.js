const Discord = require("discord.js");
const config = require("../../config/config.json");
const fs = require("fs"); //this package is for reading files and getting their inputs
const pathResolver = require('path') ;

module.exports = {
name: 'ban',
aliases: [],
category: 'moderation',
utilisation: '{prefix}ban <user_mention>',

execute(client, message, args) {

if (!message.member.hasPermission('BAN_MEMBERS')) {
    
    message.reply("You don't have power here!");
    return;

}

else{

const member = message.mentions.users.first();
message.guild.members.ban(member);

const ban_embed = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setAuthor(`${member.username}\`s got Banned`, `${member.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`, '')
    .setThumbnail(`${member.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`)
    .addField('Banned User username:', `${member.username}`, false)
    .addField('Banned User ID:', `${member.id}`, false)
    .addField('Moderator Username:', `${message.author.username}`, false)
    .addField('Moderator ID:', `${message.author.id}`, false)
    .setTimestamp()
    .setFooter(`Command executed by: ${message.author.username}`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
message.channel.send(ban_embed);

let logschannel = JSON.parse(fs.readFileSync(pathResolver.join( __dirname , '../../config/logs_channels.json')));

if(namechannel == 0) return;


let namechannel = logschannel[message.guild.name].channel;

if(!namechannel) return message.reply("I dont have the name of log channels!");

    const channel = client.channels.cache.get(`${namechannel}`);
    channel.send(ban_embed);
    return;

        }
    }  
}
