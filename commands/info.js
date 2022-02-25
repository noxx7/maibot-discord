const i18n = require ("../util/i18n");

module.exports = {
    name: "info",
    description: i18n.__("info.description"),
    execute(message, args) {

        const { MessageEmbed } = require("discord.js");

        let botEmbed = new MessageEmbed()
        
           .setColor('#808080')
           .setTitle('about mai')
           .addField('Name', 'Sakurajima mai')
           .addField('Birthday', '02 December')
           .addField('Status', 'still on progress')
           .addField('Owner', 'noxx#3349')
           .setFooter('beta release | noxx#3349')
        
           return message.channel.send(botEmbed).catch(console.error);
    }

};