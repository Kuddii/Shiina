const { Command } = require('discord.js-commando');

module.exports = class moderation extends Command {
    constructor(client) {
        super(client, {
            name: 'purge',
            group: 'moderation',
            memberName: 'purge',
            description: 'purge stuff :sunglasses:',
            guildOnly: true,
            clientPermissions: ['READ_MESSAGE_HISTORY', 'MANAGE_MESSAGES'],
			userPermissions: ['MANAGE_MESSAGES'],
        })
    }
    run(msg, args) {

        // yes i took this from xiao the one in the original shiina is much more in depth
        // i probably could add that later if i wasn't lazy

        args++;

        if (args < 1 || !Number.isInteger(Number(args))) {
            return msg.channel.send('must be number')
        }

		try {
			const messages = await msg.channel.messages.fetch({ limit: count > 100 ? 100 : count });
			await msg.channel.bulkDelete(messages, true);
			return null;
		} catch {
			return msg.reply('can\'t delete messages two weeks and older or something');
		}
    }
}
