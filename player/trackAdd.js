module.exports = (client, message, queue, track) => {
    message.channel.send({
        embed: {
            color: 'RANDOM',
            author: { name: `${track.title} has been added to the queue!` },
            footer: { text: 'FoXZilla-Bot' },
            fields: [
                { name: 'Channel', value: track.author, inline: true },
                { name: 'Requested by', value: track.requestedBy.username, inline: true },
                { name: 'From playlist', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },
                { name: 'Views', value: track.views, inline: true },
                { name: 'Duration', value: track.duration, inline: true },
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });

};