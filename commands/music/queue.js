const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: ['q'],
    utilisation: '{prefix}queue',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`> Nu cant nici-o muzica momentan, **${message.author}**.`);

        if (!queue.tracks[0]) return message.channel.send(`> Nu mai este nici-o muzica dupa asta, **${message.author}**.`);

        const embed = new MessageEmbed();
        const methods = ['', '🔁', '🔂'];

        embed.setColor('RED');
        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
        embed.setAuthor(`Lista muzici - ${message.guild.name} ${methods[queue.repeatMode]}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} *(muzica pusa de: **${track.requestedBy.username}**)*`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `> Mai am de cantat **${songs - 1}** muzica.` : `> Mai sunt alte **${songs}** muzici.`;

        embed.setDescription(`Melodia pe care o cant acum: **${queue.current.title}**\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`);

        embed.setTimestamp();
        embed.setFooter('made with ❤️ by l3ktu', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};