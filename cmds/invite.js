const discord = require("discord.js")
exports.run = async (bot , message ,args) => {
  let emb = new discord.RichEmbed()
  .setTitle("Invite")
  .setThumbnail("https://cdn.glitch.com/aa06e098-4b8a-4c1f-a407-bbad41aaeba4%2Ftake-your-invite.gif?v=1588904508090")
  .setDescription("https://discord.com/oauth2/authorize?client_id=708138100911636591&permissions=8&scope=bot")
  message.channel.send(emb);
}
