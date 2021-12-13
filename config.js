module.exports = {
    app: {
        px: '.',
        token: 'OTE5NjY5OTAwNTg1MzQwOTYw.YbZLVg.-etPFasgSDonvBRMmzFX6qkswwI',
        playing: 'Counter-Strike: Global Offensive'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
