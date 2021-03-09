module.exports = {
name: "emoji", 
category: "utility", 
aliases: [""], 
cooldown: 2, 
usage: "emoji <emoji_name>",
description: "Send an emoji (animated or not), works only with server emojis!", //the description of the command

execute(client, message, args) {

message.delete();
const emoji = message.guild.emojis.cache.find(emoji => emoji.name === `${args}`);

if(typeof emoji === 'null'){
  
    message.reply(`I can\'t find this emoji, see if you wrote it correctly!`);
    return;

}

else{

    message.channel.send(`<@!${message.author.id}> sent that emoji:`);
    message.channel.send(`${emoji}`);

        }    
    }
}
