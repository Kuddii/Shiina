require('dotenv').config();
const { CommandClient, SQLiteProvider } = require('discord.js-commando');
const { PREFIX, UWUOWO, KEIKOV2, INVITELOL } = process.env;
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: PREFIX,
	owner: KEIKOV2.split(','),
	invite: INVITELOL,
	disableMentions: 'everyone',
	unknownCommandResponse: false,
});

sqlite.open({ filename: 'kamikaze.db', driver: sqlite3.Database }).then((db) => {
	client.setProvider(new SQLiteProvider(db));
});

client.registry
	.registerDefaultTypes()
	.registerDefaultGroups()
	.registerDefaultCommands({
		help: false,
		ping: false,
		eval: false,
		unknownCommand: false,
		prefix: false,
	})
	.registerGroups([
		['animal', 'gato'],
		['general', 'tired of doing these']
	])
	.registerCommandsIn(path.join(__dirname, 'modules'));

client.on("warn", (e) => console.warn(e));
client.on("error", (e) => console.error(e));
