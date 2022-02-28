const i18n = require("../util/i18n");

module.exports = {
    name: 'talk',
    aliases: ["t"],
    description: i18n.__("talk.description"),
    execute(message, args) {
        var phrases = [
            'follow ig @_noxx7',
            'turu dek',
            'ingfo soe',
            'okoklh',
            'sipaling',
            'Ɛ=======>',
            'tru kh',
        ];

        return message.reply(phrases[Math.floor(Math.random()*phrases.length)]);
    },
};
