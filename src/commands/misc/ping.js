const { EmbedBuilder } = require('discord.js');

module.exports = {
    // deleted: true,
    name: 'ping',
    description: 'ตอบกลับด้วยบอท ping!',

    callback: async (client, interaction) => {
        await interaction.deferReply();

        const reply = await interaction.fetchReply();

        const ping = reply.createdTimestamp - interaction.createdTimestamp;

        interaction.editReply(`Pong! client ${ping} ms | Websocket: ${client.ws.ping} ms`);
    },
}