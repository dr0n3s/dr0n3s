module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`> Nu cant nici-o muzica momentan, **${message.author}**.`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `> Muzica **${queue.current.title}** a fost scoasa de pe pauza de **${message.author}**.` : `> A aparut o eroare, **${message.author}**.`);
    },
};