const { execute } = require("./kick")

const i18n = require("../util/i18n")

module.exports = {

    name: "talk",
    aliases: ["t"],
    description: i18n.__("random.talk.description"),

    execute(message,args) {
        var phrases = [

            'nox ganteng',
            'diam',
            'turu dek',
            
        ]

    }

}