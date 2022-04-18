const { Client, Collection } = require('discord.js');
const { Database } = require('quickmongo');
const chalk = require('chalk');
const fs = require('fs');

const bot = new Client({
cacheGuilds: true,
cacheChannels: false,
cacheOverwrites: false,
cacheRoles: false,
cacheEmojis: false,
cachePresences: false,
fetchAllMembers: false,
messageCacheMaxSize: 25,
messageCacheLifetime: 10000, 
messageSweepInterval: 12000,
ws: {
intents: [
"GUILDS",
"GUILD_MEMBERS",
"GUILD_MESSAGES"
],
},
});

bot.commands = new Collection();

bot.config = require('./config.json');

bot.database = new Database(bot.config.dbURL);



