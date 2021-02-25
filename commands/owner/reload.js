const Discord = require("discord.js");
const config = require("../../config/config.json");
const fs = require("fs"); //this package is for reading files and getting their inputs
const pathResolver = require('path') ;

module.exports = {
name: 'reload',
aliases: [],
category: 'Owner',
utilisation: 'TOP SECRET!',

execute(client, message, args) {

if (message.author.id === config.ownerid) {
			
const commandName = args[0];
const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

if (!command) {

    message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);
    return;

}

const commandFolders = fs.readdirSync('./commands');
const folderName = commandFolders.find(folder => fs.readdirSync(`./commands/${folder}`).includes(`${commandName}.js`));
delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];

try {

    const newCommand = require(`../${folderName}/${command.name}.js`);
    message.client.commands.set(newCommand.name, newCommand);
    message.react('✅');
            
} 

catch (error) {

    console.error(error);
    let text = "There was an error while reloading "+`${command.name}`+": \n ```bat\ntype error: \n"+`${error}`+"\n"+"```";
    message.channel.send(text);
        
            }
        }
    },
};