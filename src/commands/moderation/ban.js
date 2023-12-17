const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

module.exports = {
    // deleted: true,
    name: 'ban',
    description: 'แบน พวกไม่สร้างสรรค์!!!.',
    // devOnly: Boolean,
    // testOnly: Boolean,
    options: [
        {
            name: 'target-user',
            description: 'แบนผู้ใช้',
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