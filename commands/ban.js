const discord = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
    name: "ban",
    aliases: ["b"],
    description: i18n.__("ban.description"),
    execute (message, args) {
        
       if (!message.member.hasPermission('BAN_MEMBER')) return message.reply('you dont have permission to do that')

       let member = message.mentions.members.first()
       if (!member) return message.reply('please enter a correct username')
       let reason = args.slice(1).join(" ");
       if (!reason) reason = 'no reason given';
       if (member.banable) return message.reply('sorry you cant ban this member')

       member.ban({ reason }).catch(err=> console.log(err))
           
          const { MessageEmbed } = require("discord.js");

          let botEmbed = new MessageEmbed()
 
            .setAuthor(`BANNED`)
            .setColor("#FF0000")
            .addField("Name", member)
            .addField("Reason", reason)
            .setFooter(`✅successfully banned ${member.user.tag}`)
        
          return message.channel.send(botEmbed).catch(console.error);

     }
    
  
};
        