const discord = require("discord.js");
const { client, MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
    name: "avatar",
    aliases: ["avt"],
    description: i18n.__("avatar.description"),
    execute(message, args) {

        const member = message.mentions.members.first();
    
            let avatarEmbed = new MessageEmbed()
               .setColor("RANDOM")
               .setImage(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
            
            return message.channel.send(avatarEmbed).catch(console.error);
        
    }
};