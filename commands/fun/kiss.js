const Discord = require("discord.js");
const config = require("../../config/config.json");
const fs = require("fs"); //this package is for reading files and getting their inputs
const pathResolver = require('path');

module.exports = {
name: 'kiss',
aliases: [],
category: 'fun',
utilisation: '{prefix}kiss <user_mention>',

execute(client, message, args) {
    
const wallpapers = [

    'https://i.giphy.com/media/Ka2NAhphLdqXC/source.gif',
    'https://i.giphy.com/media/JFmIDQodMScJW/source.gif',
    'https://i.giphy.com/media/7z1xs4Fl9Kb8A/source.gif',
    'https://media.giphy.com/media/UtzGYzqVYTz6o/giphy.gif',

];

const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
const taggedUser = message.mentions.users.first();

const hug_embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`<@!${message.author.id}> kissed <@!${taggedUser.id}>`, ``, '')
    .setImage(response)
    .setTimestamp()
    .setFooter(`Command executed by: ${message.author.username}`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
message.channel.send(hug_embed);

    }
}