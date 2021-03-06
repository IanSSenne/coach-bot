const timeouts = {
    userName: { commandName: true }
};

module.exports = config => (
    (client, target, context, args, messageHandler) => {
        if(timeouts[context.username] && timeouts[context.username].audio || timeouts[config.file])
            return;

        if (timeouts[context.username] && timeouts[context.username][config.file]) {
            client.whisper(context.username, `Sorry, that command is on cool down...`);
            return;
        }            
        
        timeouts[context.username] = {
            ...timeouts[context.username], 
            [config.file]: true,
            audio: true
        };

        if(config.globalTimeout)
            timeouts[config.file] = true;


        setTimeout(() => timeouts[context.username].audio = undefined, 5000);
        setTimeout(() => timeouts[context.username][config.file] = undefined, config.timeout || 30000);
        setTimeout(() => timeouts[config.file] = undefined, config.globalTimeout || 30000);

        messageHandler && messageHandler({
            type: 'audio',
            file: config.file
        });
    }
);