const discord = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
    name: "kick",
    aliases: ["k"],
    description: i18n.__("kick.description"),
    execute (message, args) {

        if (message.content.startsWith("!mai kick")) {
            
          if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('you dont have permission to do that')
  
          let member = message.mentions.members.first()
          if (!member) return message.reply('is that person even on this server....')
          if (!member === message.author.id) return message.reply('you cant kick me')
          let reason = args.slice(1).join(" ");
          if (!reason) reason = 'No Reason Given';
    
          member.kick(reason).catch(err => console.log(err)); 
           
          const { MessageEmbed } = require("discord.js");
 
          let botEmbed = new MessageEmbed()

             .setAuthor(`MEMBER KICKED`)
             .setColor("#FF0000")
             .addField("Name", member)
             .addField("Reason", reason)
             .setFooter(`✅successfully kicked ${member.user.tag}`)
        
          return message.channel.send(botEmbed).catch(console.error);
        }
    }
};
        