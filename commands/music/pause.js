module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`> Nu cant nici-o muzica momentan, **${message.author}**.`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `> Muzica **${queue.current.title}** a fost pusa pe pauza.` : `> A aparut o eroare, **${message.author}**.`);
    },
};