const audioCmd = require('./audio');
const greetingCmd = require('./greetings');
let test = require('./test');

module.exports = {
    getCommand: (cmd, user)  => {
        if (legacy[cmd] !== undefined)
            return legacy[cmd];
        
        if (audio[cmd] !== undefined)
            return(audioCmd(audio[cmd]));
        
            // test = {
            //     '!testSub': (client, target, context, args, messageHandler) => {
            //         client.say(target, "Hello world")
            //     }
            // }
        if (test[cmd] !== undefined)
            return(test[cmd]);

        if (['!hi', '!hello', 'o/' ].some(s => s === cmd))
            return(greetingCmd(user));
    }
}

const legacy = {
    '!dice': require('./dice.js'),
    '!weird': require('./weird.js'),
    '!confused': require('./confused.js'),
    '!commands': require('./commands.js'),
    '!hangman': require('./hangman.js'),
    '!eggsembly': require('./eggsembly.js'),
}

const audio = { 
    '!taco': { file: 'taco.mp3' },
    '!copyright': { file: 'copyright.mp3' },
    '!meat': { file: 'meat.mp3' },
    '!pokemon': { file: 'pokemon.mp3' }
}