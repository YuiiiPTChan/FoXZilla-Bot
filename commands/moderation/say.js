const Discord = require("discord.js");
const config = require("../../config/config.json");
const fs = require("fs"); //this package is for reading files and getting their inputs
const pathResolver = require('path') ;

module.exports = {
name: 'say',
aliases: [],
category: 'fun',
utilisation: '{prefix}say <message>',
    
execute(client, message, args) {
  
if(message.author.id === config.ownerid) {

    message.delete();
    message.channel.send(args.join(" "));
    return;
}

if (!message.member.hasPermission('MANAGE_MESSAGES')) {
    
    message.reply("You dont have power here!");
    return;
    
}
    
else{

    message.delete();
    message.channel.send(args.join(" "));

        }
    },
};