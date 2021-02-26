const Discord = require('discord.js');

module.exports = {
name: 'invite',
aliases: [],
category: 'Info',
utilisation: '{prefix}invite',

execute(client, message, args) {

message.channel.send(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)

    },
};
