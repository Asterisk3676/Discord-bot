const path = require('path');
const getAllFiles = require('./getAllFiles')

module.exports = (exceptions = []) => {
    let localCommands = [];

    const commandCatergories = getAllFiles(
        path.join(__dirname, '..', 'commands'),
        true
    )
    
    for(const commandCatergory of commandCatergories) {
        const commandFiles = getAllFiles(commandCatergory);

        for(const commandFile of commandFiles) {
            const commandObject = require(commandFile);
            if(exceptions.includes(commandObject.name)) {
                continue;
            }
            localCommands.push(commandObject);
        }
    }

    return localCommands;
}