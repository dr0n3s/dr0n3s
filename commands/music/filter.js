module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`> Nu cant nici-o muzica momentan, **${message.author}**.`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`> Te rugam sa specific un filtru valid pentru a-l activa sau dezactiva, **${message.author}**.\n${actualFilter ? `> Filtrul care este acum: **${actualFilter}** (${client.config.app.px}filter ${actualFilter} pentru a-l dezactiva).\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`> Acest filtru nu exista, **${message.author}**.\n${actualFilter ? `> Filtrul activ acum: **${actualFilter}**.\n` : ''}> Lista cu filtre: **${filters.map(x => `**${x}**`).join(', ')}**.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`> Filtrul **${filter}** este acum **${queue.getFiltersEnabled().includes(filter) ? 'activat' : 'dezactivat'}**.\n*(daca muzica tine mult, dureaza mai mult)*`);
    },
};