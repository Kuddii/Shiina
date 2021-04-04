require('dotenv').config();
const { CommandClient, SQLiteProvider } = require('discord.js-commando');
const { PREFIX, UWUOWO, KEIKOV2, INVITELOL } = process.env;

const client = new CommandoClient({
	commandPrefix: PREFIX,
	owner: KEIKOV2.split(','),
	invite: INVITELOL,
	disableMentions: 'everyone',
	unknownCommandResponse: false,
});
