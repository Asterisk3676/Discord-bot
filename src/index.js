const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('../config.json');
const eventHandler = require('./handlers/eventHandler');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

eventHandler(client);

client.login(token);