const discord = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
    name: "unban",
    aliases: ["ub"],
    description: i18n.__("unban.description"),
    execute (message, args) {
        
       if (!message.member.hasPermission('BAN_MEMBER')) return message.reply('you dont have permission to do that');

       let member = args[0];
       if (!member) return message.reply('please enter a correct username');

       message.guild.members.unban(member)
         .then(k => {
             message.reply(`✅ **${member}** succsessfully unbanned!`);
         })
         .catch(err => {
             message.reply("something went wrong");
         });
           
         

     }
    
  
};
        