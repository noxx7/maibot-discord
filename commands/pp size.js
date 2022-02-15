const i18n = require("../util/i18n");

module.exports = {
    name: 'pee pee size',
    aliases: ["pp"],
    description: i18n.__("pp.description"),
    execute(message, args) {
        var phrases = [
            'Ɛ============>',
            'Ɛ===========>',
            'Ɛ==========>',
            'Ɛ=========>',
            'Ɛ========>',
            'Ɛ=======>',
            'Ɛ======>',
            'Ɛ=====>',
            'Ɛ====>',
            'Ɛ===>',
            'Ɛ==>',
            'Ɛ=>',  
        ];

        return message.reply(phrases[Math.floor(Math.random()*phrases.length)]);
    },
};