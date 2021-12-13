module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `> Nu cant nici-o muzica momentan, **${message.author}**.`, ephemeral: true, components: [] });

            int.member.send(`> Ai salvat muzica **${queue.current.title}**. | **${queue.current.author}**`).then(() => {
                return int.reply({ content: `> Ti-am spus cum se numeste muzica in privat.`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `> Nu pot sa-ti trimit un mesaj in privat.`, ephemeral: true, components: [] });
            });
        }
    }
};