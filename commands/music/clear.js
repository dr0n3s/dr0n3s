module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`> Nu cant nici-o muzica momentan, **${message.author}**.`);

        if (!queue.tracks[0]) return message.channel.send(`> Nu mai am de cantat nici-o muzica dupa asta, **${message.author}**.`);

        await queue.clear();

        message.channel.send(`> Lista cu muzici a fost stearsa de **${message.author}**.`);
    },
};