const Discord = require("discord.js");
const config = require("../../config/config.json");
const fs = require("fs"); //this package is for reading files and getting their inputs
const pathResolver = require('path') ;

module.exports = {
name: 'penis',
aliases: ["dick", "pila"],
category: 'fun',
utilisation: '{prefix}pila <user_mention>',
    
execute(client, message, args) {

const target = message.mentions.users.first() || message.author
const wallpapers = [
    '8=D',
    '8==D',
    '8===D',
    '8====D',
    '8=====D',
    '8=======D',
    '8========D',
    '8=========D',
    '8==========D',
    '8===========D',
    '8============D',
    '8=============D',
    '8==============D',
];

const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];

if (target.id === config.ownerid){
            
const hug_embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`Penis Reviewer`, ``, '')
    .addField(`${target.username} dick size`, `8====================D`, false)
    .setThumbnail(`${target.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`)
    .setTimestamp()
    .setFooter(`Command executed by: ${message.author.username}`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`); 
message.channel.send(hug_embed);

}

else{

const hug_embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`Penis Reviewer`, ``, '')
    .addField(`${target.username} dick size`, `${response}`, false)
    .setThumbnail(`${target.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`)
    .setTimestamp()
    .setFooter(`Command executed by: ${message.author.username}`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
message.channel.send(hug_embed);

        }
    },
};