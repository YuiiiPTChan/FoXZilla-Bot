const Discord = require("discord.js");
const config = require("../../config/config.json");
const fs = require("fs"); //this package is for reading files and getting their inputs
const pathResolver = require('path');

module.exports = {
name: 'purge',
aliases: ['clear', 'prune'],
category: 'moderation',
utilisation: '{prefix}purge <amount>',

execute(client, message, args) {

if(message.author.id === config.ownerid) {

    const amount = parseInt(args[0]) + 1;

if (isNaN(amount)) {

    message.reply('That doesn\'t seem to be a valid number.');
    return;

}
    
if(amount <= 1 || amount > 100) {
        
    message.reply('You need to input a number between 1 and 99.');
    return;
    
}

message.channel.bulkDelete(amount, true).catch(err => {
console.error(err);
message.channel.send('There was an error trying to prune messages in this channel!');

});

const purge_message = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`${amount} messages have been deleted!`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`)
    .setDescription('')
    .addField('Moderator Username:', `<@!${message.author.id}>`, false)
    .addField('Moderator ID:', `${message.author.id}`, false)   
    .setTimestamp()
    .setFooter(`Command executed by: ${message.author.username}`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
message.channel.send(purge_message);

let logschannel = JSON.parse(fs.readFileSync(pathResolver.join( __dirname , '../../config/logs_channels.json')));
let namechannel = logschannel[message.guild.name].channel;

if(!namechannel){

    message.reply("I dont have the name of log channels!");
    return;
} 

const channel = client.channels.cache.get(`${namechannel}`);
channel.send(purge_message);
return;
    
}

if(!message.member.hasPermission('MANAGE_MESSAGES')){
     message.reply("You dont have power here!");
}

else {

const amount = parseInt(args[0]) + 1;

if (isNaN(amount)) {

    message.reply('That doesn\'t seem to be a valid number.');
    return;

}
    
if(amount <= 1 || amount > 100) {
        
    message.reply('You need to input a number between 1 and 99.');
    return;
    
}

message.channel.bulkDelete(amount, true).catch(err => {
console.error(err);
message.channel.send('there was an error trying to prune messages in this channel!');

});

const purge_message = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`${amount} messages have been deleted!`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`)
    .setDescription('')
    .addField('Moderator Username:', `<@!${message.author.id}>`, false)
    .addField('Moderator ID:', `${message.author.id}`, false)   
    .setTimestamp()
    .setFooter(`Command executed by: ${message.author.username}`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
message.channel.send(purge_message);

let logschannel = JSON.parse(fs.readFileSync(pathResolver.join( __dirname , '../../config/logs_channels.json')));
let namechannel = logschannel[message.guild.name].channel;

if(namechannel == 0) return;


if(!namechannel){

    message.reply("I dont have the name of log channels!");
    return;
} 

const channel = client.channels.cache.get(`${namechannel}`);
channel.send(purge_message);
return;

        }
    }
}
