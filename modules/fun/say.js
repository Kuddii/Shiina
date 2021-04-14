const { Command } = require('discord.js-commando');

module.exports = class fun extends Command {
    constructor(client) {
        super(client, {
            name: 'say',
            group: 'fun',
            memberName: 'say',
            description: 'i will repeat any text',
            argsType: 'multiple',
        })
    }
    run(msg, args) {

        let text = args.join(" ");

        if (!text) {
            return msg.channel.send('include some text next time');
        }

        return msg.channel.send(text);
    }
};