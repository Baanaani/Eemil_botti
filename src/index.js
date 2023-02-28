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
let ajastinpalla = false;
let aika = 0;
let lopettaja = null;



client.on("ready", (c) => {
    console.log(`✅ ${c.user.tag} is online`)
});


client.on("interactionCreate", (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "hei"){
        interaction.reply("Hei!");
    }

    if (interaction.commandName === "ping"){
        interaction.reply("Pong!");
    }
    if (interaction.commandName === "aloita"){
        lopettaja = setInterval(ajastin, 1000);
        ajastinpalla = true;
        //console.log("Toistuuko?");
        interaction.reply("Ajastin aloitettu");
    }
    if (interaction.commandName === "lopeta"){
        ajastinpalla = false;
        clearInterval(lopettaja);
        interaction.reply("Ajastin lopetettu ajalla: " + aika);
    }

});



function ajastin() {
    if (ajastinpalla == true){
        aika = aika +1;
        console.log(aika);
    }else {
        console.log("ajastin oli : " + aika);
        return aika;

    }

}

client.login(process.env.TOKEN);