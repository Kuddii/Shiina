const { Command } = require('discord.js-commando');

module.exports = class help extends Command {
    constructor(client) {
        super(client, {
            name: 'help',
            group: 'general',
            memberName: 'help',
            description: 'see all commands',
            guarded: true,
            args: [
                {
                    key: 'command',
                    prompt: 'what command do you want to view?',
                    type: 'command',
                }
            ],
        })
    }
    run(msg, { command }) {
        if (!command) {
            let embed = {
                "fields": [
                    {
                        name: 'General',
                        value: 'Avatar, Channel, Help',
                        inline: true,
                    },
                    {
                        name: 'Nsfw',
                        value: 'Swimsuit, Hentai',
                        inline: true,
                    }
                ]
            };

            msg.channel.send(embed)
        } else {
            msg.channel.send(`${command.name}:\n${command.description}`)
        }
    }
}