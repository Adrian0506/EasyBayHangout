require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js')
const access = require('./embs/access.js')
const addRole = require('./interactions/addRole.js')
const notAdmin = require('./embs/notAdmin.js')

const client = new Client({
    intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    ]
})
// when the bot starts up
client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  console.log("Bot is online!")
})

// when someone types a message
client.on("messageCreate", async msg => {
  // check if the message is ping
    // if the message is ping, reply with pong
    let guild = await client.guilds.fetch(msg.guildId);
    let member = await guild.members.fetch(msg.author.id);
    if (msg.author.bot) {
      return
    }

   if (msg.content === '!access') {
    if (member.roles.cache.has('1020887997928976434')) {
     await access(msg)
    } else {
      await notAdmin(msg)
    }
  }
})


client.on('interactionCreate', interaction => {
  if (interaction.channelId === '1021905149079339028') { // test role for mow
    // add role function 
    addRole(interaction)
  }
});


client.login(process.env.secret_key)