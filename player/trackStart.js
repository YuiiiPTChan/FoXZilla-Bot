module.exports = (client, message, track) => {

    message.channel.send({
        embed: {
            color: 'RANDOM',
            author: { name: `Started playing ${track.title}` },
            footer: { text: 'FoXZilla-Bot' },
            fields: [
                { name: 'Channel', value: track.author, inline: true },
                { name: 'Requested by', value: track.requestedBy.username, inline: true },
                { name: 'From playlist', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                { name: 'Views', value: track.views, inline: true },
                { name: 'Duration', value: track.duration, inline: true },

                { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
                { name: 'Repeat mode', value: client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },

                { name: 'Progress bar', value: client.player.createProgressBar(message, { timecodes: true }), inline: false }
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });

};