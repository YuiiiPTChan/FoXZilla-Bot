const Discord = require("discord.js");
const config = require("../../config/config.json");
const fs = require("fs"); //this package is for reading files and getting their inputs
const pathResolver = require('path') ;

module.exports = {
name: 'unban',
aliases: [],
category: 'moderation',
utilisation: '{prefix}unban <user_id>',

execute(client, message, args) {

if (!message.member.hasPermission('BAN_MEMBERS')) {

message.reply("You dont have power here!");
return;

}

else{

const id = args[0];
message.guild.members.unban(id);    
    
const unban_embed = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setAuthor(`A member get Unbanned`)
    .addField('Unbanned User username:', `<@!${id}>`, false)
    .addField('Unbanned User ID:', `${id}`, false)
    .addField('Moderator Username:', `<@!${message.author.id}>`, false)
    .addField('Moderator ID:', `${message.author.id}`, false)
    .setImage('')
    .setTimestamp()
    .setFooter(`Command executed by: ${message.author.username}`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
message.channel.send(unban_embed);

let logschannel = JSON.parse(fs.readFileSync(pathResolver.join( __dirname , '../../config/logs_channels.json')));
let namechannel = logschannel[message.guild.name].channel;

if(!namechannel) return message.reply("I dont have a name of log channels!");

const channel = client.channels.cache.get(`${namechannel}`);
channel.send(unban_embed);
return;

        }
    }
}