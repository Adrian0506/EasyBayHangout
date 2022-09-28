module.exports = addRole = async (interaction) => {
    const user = interaction.member
    let cerrito = interaction.guild.roles.cache.find(role => role.id == "1020868774934618202")
    let berkeley = interaction.guild.roles.cache.find(role => role.id == "1020868831234764840")
    let albany = interaction.guild.roles.cache.find(role => role.id == "1020878267227578399")
    let other = interaction.guild.roles.cache.find(role => role.id == "1024477991419514900")
    if (interaction.customId === 'Cerrito') {
        user.roles.add(cerrito)
        interaction.deferUpdate()
    } else if (interaction.customId === 'Berkeley') {
        user.roles.add(berkeley)
        interaction.deferUpdate()
    } else if (interaction.customId === 'Albany') {
        user.roles.add(albany)
        interaction.deferUpdate()
    } else if (interaction.customId === 'Other') {
        user.roles.add(other)
    }
}