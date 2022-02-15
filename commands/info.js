const i18n = require ("../util/i18n");

module.exports = {
    name: "info",
    description: i18n.__("info.description"),
    execute(message, args) {

        const { MessageEmbed } = require("discord.js");

        let botEmbed = new MessageEmbed()
        
           .setColor('#808080')
           .setTitle('about i18n')
           .addField('Name', 'Sakurajima i18n')
           .addField('Birthday', '02 December')
           .addField('Status', 'this bot is still on beta!')
           .addField('Owner', 'noxx#3349')
           .setFooter('beta release | noxx#3349')
        
           return message.channel.send(botEmbed).catch(console.error);
    }

};