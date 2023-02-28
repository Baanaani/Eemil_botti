require("dotenv").config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on("ready", (c) => {
    console.log(`✅ ${c.user.tag} is online`)
});

/*lukee viestin
client.on("messageCreate", (viesti) => {
    console.log(viesti);
})*/

//lukee viestin sisällön
client.on("messageCreate", (viesti) => {
    if (viesti.author.bot){
        return;
    }
    if (viesti.content === "Hei"){
        viesti.reply("Hei");
    }
});

client.login(process.env.TOKEN);