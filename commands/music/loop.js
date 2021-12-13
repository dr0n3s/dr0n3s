const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop (queue)',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`> Nu cant nici-o muzica momentan, **${message.author}**.`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`> Pentru a face asta scoate modul de repetare folosind **${client.config.app.px}loop**, *8${message.author}**.`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `> Modul de repetare a fost **${queue.repeatMode === 0 ? 'dezactivat' : 'activat'}** pentru viitoarele muzici care vor canta.\n(poti dezactiva/activa modul de repetare folsind **.loop queue**)*` : `> A aparut o eroare, **${message.author}**.`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`> Pentru a face asta trebuie sa scoti modul de repetare folosind **${client.config.app.px}loop**, **${message.author}**.`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `> Modul de repetare a fost **${queue.repeatMode === 0 ? 'dezactivat' : 'activat'}**.\n*(poti dezactiva/activa modul de repetare folsind **.loop**)*` : `> A aparut o eroare, **${message.author}**.`);
        };
    },
};