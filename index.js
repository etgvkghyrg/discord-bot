const { Client, GatewayIntentBits, Partials, Collection} = require('discord.js');


const {Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;
const {User, Message, GuilddMember, ThreadMember, Channel} = Partials;

const {loadEvents} = require('./Handlers/eventsHandler');
const {loadCommands} = require('./Handlers/commandHandler');


const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages],
    partials: [User, Message, GuildMembers, ThreadMember],
});
client.commands = new Collection();
client.config = require('./config.json')

client.login(client.config.token).then(() => {
   loadEvents(client);
   loadCommands(client)
})
