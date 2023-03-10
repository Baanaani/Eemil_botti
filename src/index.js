require("dotenv").config();
/*const { Client, IntentsBitField } = require('discord.js');*/

const discord = require('discord.js');
/*const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildVoiceStates,
        IntentsBitField.Flags.MessageContent,
    ]
})*/
const client = new discord.Client({
    intents: [
        "Guilds",
        "GuildMembers",
        "GuildMessages",
        "GuildVoiceStates",
        "MessageContent",
    ]
})
const { DisTube } = require("distube");
let ajastinpalla = false;
let aika = 0;
let lopettaja = null;

client.DisTube = new DisTube(client, {
    leaveOnStop: false,
    leaveOnEmpty: false,
    emitNewSongOnly: true,
    emitAddSongWhenCreatingQueue: false,
    emitAddListWhenCreatingQueue: false,
})

//moi


client.DisTube.on("error", (message, error) => {
    console.error(`Error: ${error}`);
});

client.on("ready", (c) => {
    console.log(`✅ ${c.user.tag} is online`)
});

client.on("messageCreate", message => {
    if (message.author.bot || !message.guild) return;
    const prefix = "?"
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    if (message.content === "ping"){
        message.reply("pong");
    }
    if (message.content === "pong"){
        message.reply("ping");
    }
    if (message.content === "bing"){
        message.reply("bong");
    }


    if (args.shift().toLowerCase() === "play") {
        client.DisTube.play(message.member.voice.channel, args.join(" "), {
            member: message.member,
            textChannel: message.channel,
            message
        })
    }

    if (message.content.toLowerCase() === prefix + "pause") {
        client.DisTube.pause(message);
        message.reply("Musiikin toisto tauolla.");
    }

    if (message.content.toLowerCase() === prefix + "skip") {
        client.DisTube.skip(message);
        message.reply("Ohitettu tämän hetkinen biisi.");
    }

    if (message.content.toLowerCase() === prefix + "resume") {
        client.DisTube.resume(message);
        message.reply("Muusiikkin toisto jatkettu.");
    }

    if (message.content.toLowerCase() === prefix + "stop") {
        client.DisTube.stop(message);
        message.reply("Musiikkin toisto lopetettu.");
    }
})



client.DisTube.on("playSong", (queue,song) => {
    queue.textChannel.send("Nyt toistaa: " + song.name)
})
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

        lopettaja = null;
        interaction.reply("Ajastin lopetettu ajalla: " + aika);
        aika = 0;
    }

});



function ajastin() {
    if (ajastinpalla === true){
        aika = aika +1;
        console.log(aika);
    }else {
        console.log("ajastin oli : " + aika);
        return aika;

    }

}

client.login(process.env.TOKEN);