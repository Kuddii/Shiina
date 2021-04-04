const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = class animal extends Command {
    constructor(client) {
        super(client, {
            name: 'fox',
            group: 'animal',
            memberName: 'fox',
            description: 'fox',
        })
    }
    run(msg) {

        axios
            .get('https://randomfox.ca/floof/')
            .then((res) => {
                ('RES', res.data.image)

                const foxxo = new MessageEmbed()
                    .setImage(res.data.image)

                msg.channel.send(foxxo)
            })
    }
}
