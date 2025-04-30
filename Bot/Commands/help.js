//help.js

module.exports.Help = async (message) => {
    return message.reply("To use the commands, Tango must be in a voice channel using the !join command. This adds Tango to the voice chat the user is currently in. Then, use either the !tts or !transcribe command to use their respective functions. Then once done, use the !leave to remove the bot from its current channel. For further explanation of commands, please read 'About Tango on our website.'");
}
  