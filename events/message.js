module.exports = (client, message) => {
    
var prefix = process.env.prefix;
    
    if (message.author.bot || message.channel.type === 'dm') return;
    
var prefix = process.env.prefix;

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (cmd) cmd.execute(client, message, args);
};
