const Discord = require("discord.js");
const config = require("../../config/config.json");
const fs = require("fs"); //this package is for reading files and getting their inputs
const pathResolver = require('path');

module.exports = {
name: 'pat',
aliases: [],
category: 'fun',
utilisation: '{prefix}pat <user_mention>',

execute(client, message, args) {

const wallpapers = [

    'https://i.giphy.com/media/N0CIxcyPLputW/source.gif',
    'https://i.giphy.com/media/uw3fTCTNMbXAk/source.gif',
    'https://i.giphy.com/media/l2SpWgnCU5bOKngHK/source.gif',
    'https://i.giphy.com/media/RMdc4Q9X16hVK/source.gif',

];

const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
const taggedUser = message.mentions.users.first();

const pat_embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`<@!${message.author.id}> petted <@!${taggedUser.id}>`, ``, '')
    .setImage(response)
    .setTimestamp()
    .setFooter(`Command executed by: ${message.author.username}`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
message.channel.send(pat_embed);

    }
}