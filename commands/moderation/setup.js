const Discord = require("discord.js");
const config = require("../../config/config.json");
const fs = require("fs"); //this package is for reading files and getting their inputs
const pathResolver = require('path') ;

module.exports = {
name: 'setup',
aliases: [],
category: 'moderation',
utilisation: '{prefix}setup <log_channel_id>',

execute(client, message, args) {

if(message.author.id === config.ownerid) {

const id = JSON.parse(fs.readFileSync( pathResolver.join( __dirname , '../../config/logs_channels.json')));
          
id[message.guild.name] = {channel: args[0]};
            
fs.writeFile( pathResolver.join( __dirname , '../../config/logs_channels.json'  ) , JSON.stringify(id), (err) => {
if (err) console.log(err)

if(args[0]==0){
    message.reply(`You cancelled logs in ${message.guild.name}`);
    return;
}

if(message.guild.channels.cache.get(args[0]) === undefined)  { 

    message.reply("This channel doesn't exist in this server!")
return;
} 
  
else{
    message.reply(`Already setup logs to <#${args[0]}>`);
return;
    }
});

return;

}

if (!message.member.hasPermission('ADMINISTRATOR')) {
        
    message.reply("You dont have power here!");
    return;

}

else{

const id = JSON.parse(fs.readFileSync( pathResolver.join( __dirname , '../../config/logs_channels.json')));

id[message.guild.name] = {channel: args[0]};
            
fs.writeFile( pathResolver.join( __dirname , '../../config/logs_channels.json'  ) , JSON.stringify(id), (err) => {if (err) console.log(err)});

if(args[0]==0){
    message.reply(`You cancelled logs in ${message.guild.name}`);
}

if(message.guild.channels.cache.get(args[0]) === undefined)  { 

message.reply("This channel doesn't exist in this server!")

} 

else{              
    
    message.reply(`Already setup logs to <#${args[0]}>`);
    return;
 
            }
        }
    }
}
