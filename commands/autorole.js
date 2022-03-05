const discord = require("discord.js");
const { util } = require("simple-youtube-api");
const i18n = require('../util/i18n');

module.exports = {
    name: "autorole",
    description: i18n.__("autorole.description"),
    async execute(message, args) {
        client.on('guildMemberAdd', member => {
            member.roles.add(member.guild.roles.cache.find(i => i.name === 'Among The Server'))

            const welcomeEmbed = new Discord.MessageEmbed()
                .setColor('CYAN')
                .setTitle('**' + member.user.username + '** joined the server **' + member.guild.memberCount + '** people')
                .setImage(i18n.__('mai.jpg'))

            member.guild.channels.cache.find(i => i.name === 'Selamat Datang').send(WelcomeEmbed)
        })
    }
}