require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
    {
        name: "hei",
        description: "Vastaa sanomalla hei!",
    },
    {
        name: "ping",
        description: "Pong!",
    },
    {
        name: "aloita",
        description: "Aloittaa ajastimen",
    },
    {
        name: "lopeta",
        description: "Lopettaa ajastimen",
    },
];


const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);


(async () => {
    try {
        console.log("Rekisteroidyt kautta komennot...");

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )

        console.log("Kautta komento suoritettu onnistuneesti.");
    } catch (error) {
        console.log(`Tapahtui virhe : ${error}`);
    }
})();