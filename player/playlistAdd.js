module.exports = (client, message, queue, playlist) => {

    message.channel.send({
        embed: {
            color: 'RANDOM',
            author: { name: `${playlist.title} has been added to the queue!` },
            footer: { text: 'FoXZilla-Bot' },
            fields: [
                { name: 'Requested by', value: playlist.requestedBy.username, inline: true },
                { name: 'Songs', value: playlist.tracks.length, inline: true },
            ],
            thumbnail: { url: playlist.thumbnail },
            timestamp: new Date(),
        },
    });
};