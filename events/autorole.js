const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const i18n = require('../util/i18n');
const Event = require('../events.js');

module.exports = new Event("guildMemberAdd", (client, member) => {
    const channel = member.guild.channels.cache.find(c => c.name == "welcome");
   
    if (!channel) return;

    let botEmbed = new MessageEmbed();
    embed.setTitle("Selamat Datang")
         .setAuthor(member.user.tag)
         .setThumbnail(member.user.avatarURL({ dynamic: true}))
         .setFooter(member.joinedAt.toUTCString())
         .setTimestamp(member.joinedTimestamp)

    channel.send({ embeds: [embed] });
});