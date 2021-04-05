const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = class fun extends Command {
    constructor(client) {
        super(client, {
            name: 'tweet',
            group: 'fun',
            memberName: 'tweet',
            description: 'tweet something get clout repeat',
            argsType: 'multiple',
        })
    }
    run(msg, args) {

        const lmao = args[0];
        const lol = args[1];

        if (!lmao || !lol) {
            return msg.channel.send('include some text next time')
        }
      
        axios
            .get(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${lmao}&text=${lol}`))
            .then((res) => {
                ('RES', res.data.message)


                const Tweet = new MessageEmbed()
                    .setImage(res.data.message)

                msg.channel.send(Tweet)
            })
    }
}
