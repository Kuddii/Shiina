const { Command } = require('discord.js-commando');
const r = require('node-superfetch');
const { NEKOSUWU } = process.env;

module.exports = class nsfw extends Command {
    constructor(client) {
        super(client, {
            name: 'swimsuit',
            group: 'nsfw',
            memberName: 'swimsuit',
            description: 'swimsuits',
            guildOnly: true,
            nsfw: true,
        })
    }
    async run(msg) {

    // note this command will break the bot if you don't have an auth token
    // removing the command entierly will fix this issue
    // or you can buy an auth token
        
        const { body } = await r
        .get('');
        
        const embed = {
            "image": {
                "url": body.message,
            },
        };
        
        msg.channel.send(embed);
    }
}
