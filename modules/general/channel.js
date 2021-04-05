const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = class general extends Command {
    constructor(client) {
        super(client, {
            name: 'channel',
            group: 'general',
            memberName: 'channel',
            description: 'get channel info',
        })
    }
    run(msg) {

        let channel = msg.mentions.channels.first();

        if (!channel) {
            channel = msg.channel;
        }

        const UwU = new MessageEmbed()
            .addField(`**Channel**`, channel.name, true)
            .addField(`**ID**`, channel.id, true)
            .addField('**Created At**', moment.utc(channel.createdAt).format('DD MMM YYYY h:mm'), true)

        msg.channel.send(UwU)
    }
}