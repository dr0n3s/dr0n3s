module.exports = {
    name: 'progress',
    aliases: ['pbar'],
    utilisation: '{prefix}progress',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`> Nu cant nici-o muzica momentan, **${message.author}**.`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`> Acum cant de pe un live, nu pot arata.`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};