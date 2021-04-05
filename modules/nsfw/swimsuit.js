const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { NEKOSUWU } = process.env;
const axios = require('axios');

module.exports = class nsfw extends Command {
    constructor(client) {
        super(client, {
            name: 'swimsuit',
            group: 'nsfw',
            memberName: 'swimsuit',
            description: 'swimsuits UwU',
        })
    }
    run(msg) {

    // note this command will break the bot if you don't have an auth token
    // removing the command entierly will fix this issue
    // or you can buy an auth token
    
    if (!msg.channel.nsfw) {
        return msg.channel.send(`not a nsfw channel`);
    }

    axios
        .get('https://nekobot.xyz/api/image?type=swimsuit', { headers: { Authorization: `${NEKOSUWU}` } })
        .then((res) => {
            ('RES', res.data.message)

            const swimsuits = new MessageEmbed()
                .setImage(res.data.message)

            msg.channel.send(swimsuits)
        })
    }
}