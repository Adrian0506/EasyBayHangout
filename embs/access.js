const { ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = access = async (message) => {
    const berkeley = new ButtonBuilder()
        .setCustomId('Berkeley')
        .setLabel('Berkeley')
        .setStyle(ButtonStyle.Danger)

    const cerrito = new ButtonBuilder()
        .setCustomId('Cerrito')
        .setLabel('El Cerrito')
        .setStyle(ButtonStyle.Primary)

    const albany =  new ButtonBuilder()
        .setCustomId('Albany')
        .setLabel('Albany')
        .setStyle(ButtonStyle.Success)

    const other =  new ButtonBuilder()
        .setCustomId('Other')
        .setLabel('Other')
        .setStyle(ButtonStyle.Secondary)

    const roleList = new ActionRowBuilder()
    .addComponents(
        berkeley,
        cerrito,
        albany,
        other,
    );

    const accessEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Location Picker')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'Location role', iconURL: 'https://seeklogo.com/images/U/university-of-california-berkeley-athletic-logo-815CB73082-seeklogo.com.png', url: 'https://discord.js.org' })
	.setDescription('This server is intended for the users around berkeley. Feel free to select other if you are not from these areas! The main goal of this server is to make friends and go to meetups!')
	.setThumbnail('https://dejpknyizje2n.cloudfront.net/gallery/California_Bear_Logo_.png')
	.addFields(
		{ name: 'Access', value: 'To gain access to the rest of the server choose the area you reside to. Once you select a role you can not choose another. Message a admin if you wish to change your role again.' },
	)
	.setImage('https://seeklogo.com/images/U/university-of-california-berkeley-athletic-logo-815CB73082-seeklogo.com.png')
	.setTimestamp()
	.setFooter({ text: 'Hangout Easy Bay', iconURL: 'https://seeklogo.com/images/U/university-of-california-berkeley-athletic-logo-815CB73082-seeklogo.com.png' });
    
message.reply({ embeds: [accessEmbed], components: [roleList]});
}