const { queue } = require('../utilities/configUtil');
function viewQueue(message) {
    const serverQueue = queue.get(message.guild.id);
        if (!message.member.voice.channel)
            return message.channel.send(
                "You have to be in a voice channel to view the queue!"
              );
        if (!serverQueue)
            return message.channel.send("Unable to queue a song!");
        serverQueue.songs.forEach(function (value, index) {
            if (index > 0) {
                serverQueue.textChannel.send(value.title);
            }
        })
    }

  module.exports = {
    viewQueue
}