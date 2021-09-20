var express = require("express");
var app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const config = require("./storages/config.json")
const TOKEN = process.env.TOKEN;
const client = bot;
const prefix = config.prefix;

const pings = ["@everyone", "@here"];

const belis = [
  "arschloch",
  "Fick dich",
  "fick dich",
  "Arschloch",
  "Wixer",
  "wixer",
  "Hure",
  "hure",
  "Hurensohn",
  "hurensohn",
  "bastard",
  "Bastard",
  "Kakamann",
  "kakamann",
  "faul",
  "Faul",
  "scheiße",
  "Scheiße",
  "dumm",
  "Dumm",
  "blöd",
  "Blöd",
  "shit",
  "Shit",
  "lul",
  "Luhl",
  "luhl",
  "Nutte",
  "Blasen",
  "Bumsen"
];

bot.on("message", message => {
  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  let cmd = args.shift().toLowerCase();
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  // Command Handler
  try {
    delete require.cache[require.resolve(`./cmds/${cmd}.js`)];

    let commandFile = require(`./cmds/${cmd}.js`);

    commandFile.run(bot, message, args);
  } catch (e) {
    console.log(e.stack);
  }
});


bot.on('ready', () => {
  console.log(`${client.user.tag} ist gestartet`)
    bot.user.setStatus('dnd')
    bot.user.setPresence({
        game: {
            name: 'Prefix = t!',
            type: "PLAYING"
        }
    });
}); 

bot.login(TOKEN);
