module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`> Nu cant nici-o muzica momentan, **${message.author}**.`);

        message.author.send(`> Ai salvat muzica **${queue.current.title}**. | **${queue.current.author}**`).then(() => {
            message.channel.send(`> Ti-am scris cum se numeste muzica in privat, **${message.author}**.`);
        }).catch(error => {
            message.channel.send(`> Nu iti pot trimite un mesaj in privat, **${message.author}**.`);
        });
    },
};