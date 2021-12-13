module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`> Nu cant nici-o muzica momentan, **${message.author}**.`);

        if (!queue.tracks[0]) return message.channel.send(`> Nu mai am de cantat nici-o muzica dupa asta, **${message.author}**.`);

        await queue.shuffle();

        return message.channel.send(`> Au fost amestecate **${queue.tracks.length}** muzici de **${message.author}**.`);
    },
};