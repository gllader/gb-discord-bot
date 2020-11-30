require('dotenv').config()

const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}`);
  bot.user.setPresence({activity: {name: '!help to show commands', type: 'LISTENING'}, status: 'online'}).catch(console.error)
});

bot.on("message", async (msg) => {
  if (!msg.guild) return;

  if (msg.content === "!help") {
    msg.channel.send(
      `Digite os comandos sem aspas: 'KASINO', 'internacional', 'as baladas', 'ae', 'quem querover'`
    );
  }

  if (msg.content === "KASINO") {
    if (msg.member.voice.channel) {
      const connection = await msg.member.voice.channel.join();
      const dispatcher = connection.play(
        "https://www.myinstants.com/media/sounds/kasino_1.mp3"
      );

      dispatcher.setVolume(2);
      dispatcher.on("finish", () => {
        console.log("finished playing!");
        dispatcher.destroy;
      });
    } else {
      msg.reply("you need to join a voice chat channel first!");
    }
  }

  if (msg.content === "internacional") {
    if (msg.member.voice.channel) {
      const connection = await msg.member.voice.channel.join();
      const dispatcher = connection.play(
        `https://www.myinstants.com/media/sounds/internacional_GFA5YpH.mp3`
      );

      dispatcher.setVolume(1);

      dispatcher.on("finish", () => {
        console.log("finished playing!");
        dispatcher.destroy;
      });
    }
  }

  if (msg.content === "as baladas") {
    if (msg.member.voice.channel) {
      const connection = await msg.member.voice.channel.join();
      const dispatcher = connection.play(
        `https://www.myinstants.com/media/sounds/asbaladas.mp3`
      );

      dispatcher.setVolume(1);

      dispatcher.on("finish", () => {
        console.log("finished playing!");
        dispatcher.destroy;
      });
    }
  }

  if (msg.content === "ae") {
    if (msg.member.voice.channel) {
      const connection = await msg.member.voice.channel.join();
      const dispatcher = connection.play(
        "https://www.myinstants.com/media/sounds/ae-kasinao_2.mp3"
      );

      dispatcher.setVolume(5);

      dispatcher.on("finish", () => {
        console.log("finished playing!");
        dispatcher.destroy;
      });
    }
  }

  if (msg.content === "quem querover") {
    if (msg.member.voice.channel) {
      const connection = await msg.member.voice.channel.join();
      const dispatcher = connection.play(
        `https://www.myinstants.com/media/sounds/quemquerover.mp3`
      );

      dispatcher.setVolume(1);

      dispatcher.on("finish", () => {
        console.log("finished playing!");
        dispatcher.destroy;
      });
    }
  }
});

bot.login(process.env.TOKEN);
