const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`> Nu cant nici-o muzica momentan, **${message.author}**.`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`> Volumul este acum **${queue.volume}**.\n*(pentru a schimba volumul pune un numar intre 1 si ${maxVol}.)*`);

        if (queue.volume === vol) return message.channel.send(`> Volumul pe care l-ai pus este deja setat, **${message.author}**.`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`> Volumul pe care l-ai pus nu este valid, pune unul intre **1** si **${maxVol}**, **${message.author}**.`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `> Volumul a fost setat la **${vol}**/**${maxVol}**%.` : `> A aparut o eroare, **${message.author}**.`);
    },
};