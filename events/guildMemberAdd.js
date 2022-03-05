const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const i18n = require('../util/i18n');
const Event = require('../events.js');

module.exports = {
    name: "guildMemberAdd",
    async execute(member) {
        let botEmbed = new MessageEmbed()
           .setColor("BLUE")
           .setTitle("Selamat Datang")
           .setDescription(`${member.user} telah bergabung ke server!`)
           .setImage(member.user.avatar)
           .setTimestamp();

           member.guild.channels.cache.get("949450331052462090").send({
               embeds: [newMemberEmbed]
           })
    }
}
