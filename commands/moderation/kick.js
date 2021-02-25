const Discord = require('discord.js');
const config = require("../../config/config.json");
const fs = require("fs"); //this package is for reading files and getting their inputs
const pathResolver = require('path') ;

module.exports = {
name: 'kick',
aliases: [],
category: 'moderation',
utilisation: '{prefix}kick <user_mention>',

execute(client, message, args) {

if(!message.member.hasPermission('KICK_MEMBERS')){
        
message.reply("You dont have power here!");
return;

    } 

else {

const member = message.mentions.users.first();
const member_kick = message.mentions.members.first();

const kick_embed = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setAuthor(`${member.username}\`s get Kicked`, ``, '')
    .setThumbnail(`${member.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`)
    .addField('Kicked User username:', `<@!${member.id}>`, false)
    .addField('Kicked User ID:', `${member.id}`, false)
    .addField('Moderator Username:', `<@!${message.author.id}>`, false)
    .addField('Moderator ID:', `${message.author.id}`, false)
    .setImage('')
    .setTimestamp()
    .setFooter(`Command executed by: ${message.author.username}`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
    
message.channel.send(kick_embed);
member_kick.kick();

        
let logschannel = JSON.parse(fs.readFileSync(pathResolver.join( __dirname , '../../config/logs_channels.json')));
let namechannel = logschannel[message.guild.name].channel;

if(!namechannel) return message.reply("I dont have a name of log channels!");

const channel = client.channels.cache.get(`${namechannel}`);
channel.send(kick_embed);
return;

        }
    }
}