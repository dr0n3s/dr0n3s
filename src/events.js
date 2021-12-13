player.on('error', (queue, error) => {
});

player.on('connectionError', (queue, error) => {
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`> Incep sa cant **${track.title}** pe **${queue.connection.channel.name}**.`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`> Muzica **${track.title}** a fost pusa pe lista.`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('> Am fost scos manual de pe canalul de voice.');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('> Nu mai este nimeni pe canalul de voice, am iesit.');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('> Am terminat de cantat toate muzicile din lista.');
});