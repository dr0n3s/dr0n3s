module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`> Nu cant nici-o muzica momentan, **${message.author}**.`);

        const success = queue.skip();

        return message.channel.send(success ? `> Muzica **${queue.current.title}** a fost schimbata.` : `> A aparut o eraore, **${message.author}**.`);
    },
};