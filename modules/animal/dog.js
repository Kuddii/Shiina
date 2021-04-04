const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = class animal extends Command {
    constructor(client) {
        super(client, {
            name: 'dog',
            group: 'animal',
            memberName: 'dog',
            description: 'dog',
        })
    }
    run(msg) {

        axios
            .get('https://dog.ceo/api/breeds/image/random')
            .then((res) => {
                ('RES', res.data.message)

                const doggo = new MessageEmbed()
                    .setImage(res.data.message)

                msg.channel.send(doggo)
            })
    }
}
