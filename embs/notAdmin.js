const { ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = notAdmin = async (message) => {
    const notAdminEmbded = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Admin role required')
        .setAuthor({ name: 'Missing rights', iconURL: 'https://seeklogo.com/images/U/university-of-california-berkeley-athletic-logo-815CB73082-seeklogo.com.png', url: 'https://discord.js.org' })
        .setDescription('This command is intended for admins only.')
        .setTimestamp()
        .setFooter({ text: 'Hangout Easy Bay', iconURL: 'https://seeklogo.com/images/U/university-of-california-berkeley-athletic-logo-815CB73082-seeklogo.com.png' });

        message.reply({ embeds: [notAdminEmbded]});
    }
