const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = class animal extends Command {
    constructor(client) {
        super(client, {
            name: 'quack',
            group: 'animal',
            memberName: 'quack',
            description: 'quack',
        })
    }
    run(msg) {

        axios
            .get('https://random-d.uk/api/v2/quack')
            .then((res) => {
                ('RES', res.data.url)

                const ducc = new MessageEmbed()
                    .setImage(res.data.url)
                    .setFooter(`(andrew is cute) | ${res.data.message}`)

                msg.channel.send(ducc)
            })
    }
}
