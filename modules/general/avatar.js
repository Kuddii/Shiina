const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class general extends Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            group: 'general',
            memberName: 'avatar',
            description: 'shows a persons avatar',
        })
    }
    run(msg) {

        let user = msg.mentions.users.first() || msg.author;
        let avatar = user.displayAvatarURL({ size: 1024, format: "png", dynamic: true });

        const UwU = new MessageEmbed()
            .setColor('#f99fff')
            .setImage(avatar)

        msg.channel.send(UwU)
    }
}
