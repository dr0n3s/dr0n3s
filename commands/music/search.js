const { MessageEmbed } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {
    name: 'search',
    aliases: ['sh'],
    utilisation: '{prefix}search [muzica]',
    voiceChannel: true,

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`> Te rugam sa specifici ce muzica vrei sa cauti, **${message.author}**.`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`> Nu au gasit rezultate pentru asta, **${message.author}**.`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        const embed = new MessageEmbed();

        embed.setColor('BLUE');
        embed.setAuthor(`Rezultate pentru ${args.join(' ')}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const maxTracks = res.tracks.slice(0, 10);

        embed.setDescription(`${maxTracks.map((track, i) => `**${i + 1}**. ${track.title} | ${track.author}`).join('\n')}\n\n> Alege un numar intre **1** si **${maxTracks.length}** sau scrie **cancel** pentru a anula cautarea.`);

        embed.setTimestamp();
        embed.setFooter('made with ❤️ by l3ktu', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });

        const collector = message.channel.createMessageCollector({
            time: 15000,
            errors: ['time'],
            filter: m => m.author.id === message.author.id
        });

        collector.on('collect', async (query) => {
            if (query.content.toLowerCase() === 'cancel') return message.channel.send(`> Ai anulat cautarea cu succes.`) && collector.stop();

            const value = parseInt(query.content);

            if (!value || value <= 0 || value > maxTracks.length) return message.channel.send(`> Raspuns invalid, alege un numar intre **1** si **${maxTracks.length}** sau scrie **cancel** pentru a anula cautarea.`);

            collector.stop();

            try {
                if (!queue.connection) await queue.connect(message.member.voice.channel);
            } catch {
                await player.deleteQueue(message.guild.id);
                return message.channel.send(`> Nu pot intra pe acest canal de voice, **${message.author}**.`);
            }

            await message.channel.send(`> Se incarca muzica pusa de **${message.author}**.`);

            queue.addTrack(res.tracks[query.content - 1]);

            if (!queue.playing) await queue.play();
        });

        collector.on('end', (msg, reason) => {
            if (reason === 'time') return message.channel.send(`> A aparut o eroare, **${message.author}**.`);
        });
    },
};