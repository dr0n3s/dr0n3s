module.exports = async (client) => {
    console.log(`> Am numele: ${client.user.username}\n> Pregatit pe ${client.guilds.cache.size} servere cu ${client.users.cache.size} oameni.`);

    client.user.setActivity(client.config.app.playing);
};