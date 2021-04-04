const { Command } = require('discord.js-commando');
const answers = [
    "It is certain",
    "Without a doubt",
    "definitely",
    "most likely",
    "Yes",
    "ask again later",
    "don't count on it",
    "no",
    "unlikely"
]

module.exports = class fun extends Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            group: 'fun',
            memberName: '8ball',
            description: '8ball',
        })
    }
    run(msg, args) {

        const question = args;

        if (!question) {
            return msg.channel.send('write a question for the 8ball')
        }

        msg.channel.send(`:8ball: ${answers[Math.floor(Math.random() * answers.length)]}`)

    }
}
