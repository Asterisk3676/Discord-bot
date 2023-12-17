const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

module.exports = {
    // deleted: true,
    name: 'ban',
    description: 'แบนสมาชิก!!!',
    options: [
        {
            name: 'target-user',
            description: 'ผู้ใช้ที่จะแบน',
            required: true,
            type: ApplicationCommandOptionType.Mentionable,
        },
        {
            name: 'reason',
            description: 'สาเหตุที่แบน',
            type: ApplicationCommandOptionType.String,
        },
    ],
    permissionRequired: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.Administrator],

    callback: (client, interaction) => {
        interaction.reply("ban..");
    },
}