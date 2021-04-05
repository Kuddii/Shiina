const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = class fun extends Command {
    constructor(client) {
        super(client, {
            name: 'phcomment',
            group: 'fun',
            memberName: 'phcomment',
            description: 'all my homies love ph',
        })
    }
    run(msg, args) {

        const comment = args;

        if (!comment) {
            return msg.channel.send('You have to include a message...')
        }

        axios
            .get(encodeURI(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${msg.author.displayAvatarURL({ format: "png" })}&username=${msg.author.username}&text=${comment}`))
            .then((res) => {
                ('RES', res.data.message)

                const pp = new MessageEmbed()
                    .setColor('#f99fff')
                    .setImage(res.data.message)

                msg.channel.send(pp)
            })
    }
}