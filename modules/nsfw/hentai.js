const { Command } = require('discord.js-commando');
const r = require('node-superfetch');

module.exports = class hentai extends Command {
    constructor(client) {
        super(client, {
            name: 'hentai',
            group: 'nsfw',
            description: 'hentai',
            memberName: 'hentai',
            guildOnly: true,
            nsfw: true,
        })
    }
    async run(msg) {
        // unlike swimsuit this one works perfectly fine :)

        const { body } = await r
            .get('https://nekobot.xyz/api/image?type=hentai');

        let embed = {
            "image": {
                "url": body.message
            }
        };

        msg.channel.send(embed);
    }
}
