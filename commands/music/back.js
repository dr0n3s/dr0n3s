module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`> Nu cant nici-o muzica momentan, **${message.author}**.`);

        if (!queue.previousTracks[1]) return message.channel.send(`> Nu mai am de cantat nici-o muzica, **${message.author}**.`);

        await queue.back();

        message.channel.send(`> Cand melodia precedenta, **${message.author}**.`);
    },
};