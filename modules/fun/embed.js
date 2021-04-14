const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class fun extends Command {
    constructor(client) {
        super(client, {
            name: 'embed',
            group: 'fun',
            memberName: 'embed',
            description: 'put text into an embed',
            argsType: 'multiple',
        })
    }
    run(msg, args) {

        let text = args.join(" ");

        if (!text) {
            return msg.channel.send('include some text next time');
        }

        const lolz = new MessageEmbed()
        .setDescription(text)

        return msg.channel.send(lolz);
    }
};