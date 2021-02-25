const Discord = require("discord.js");
const config = require("../../config/config.json");
const fs = require("fs"); //this package is for reading files and getting their inputs
const pathResolver = require('path') ;

module.exports = {
name: 'hug',
aliases: [],
category: 'fun',
utilisation: '{prefix}hug <user_mention>',

execute(client, message, args) {

const wallpapers = [
    'https://i.giphy.com/media/EvYHHSntaIl5m/source.gif',
    'https://i.giphy.com/media/QbkL9WuorOlgI/source.gif',
    'https://i.giphy.com/media/8KKRIP5ZHUo2k/source.gif',
    'https://i.giphy.com/media/8tpiC1JAYVMFq/source.gif',
    'https://i.giphy.com/media/W4NKtcOqK2kYo/source.gif',
    'https://i.giphy.com/media/13YrHUvPzUUmkM/source.gif',
    'https://loritta.website/assets/img/actions/hug/male_x_female/gif_121.gif',
];

const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
const taggedUser = message.mentions.users.first();

const hug_embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`<@!${message.author.id}> hugged <@!${taggedUser.id}>`, ``, '')
    .setImage(response)
    .setTimestamp()
    .setFooter(`Command executed by: ${message.author.username}`, `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
message.channel.send(hug_embed);


}

}