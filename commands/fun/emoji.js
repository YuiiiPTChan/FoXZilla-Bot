module.exports = {
name: "emoji", 
category: "utility", 
aliases: [""], 
cooldown: 2, 
usage: "emoji <emoji_name>",
description: "Send a emoji (with animation and without animation), works just with a server emojis!", //the description of the command

execute(client, message, args) {

message.delete();
const emoji = message.guild.emojis.cache.find(emoji => emoji.name === `${args}`);

if(typeof emoji === 'null'){
  
    message.reply(`I can\`t find this emoji, see if you write correctaly!`);
    return;

}

else{

    message.channel.send(`<@!${message.author.id}> send that emoji:`);
    message.channel.send(`${emoji}`);

        }    
    }
}