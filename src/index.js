const { Client, Events, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');
require('dotenv').config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
  ]
});

client.once(Events.ClientReady, c => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('messageCreate', async (msg) => {

  if (msg.content === 'KASINO' || msg.content === 'internacional' || msg.content === 'as baladas' || msg.content === 'ae' || msg.content === 'quem querover') {
    if (msg.member.voice.channel) {
      const connection = joinVoiceChannel({
        channelId: msg.member.voice.channelId,
        guildId: msg.guildId,
        adapterCreator: msg.guild.voiceAdapterCreator,
      });

      if(msg.content === 'KASINO') {
        var audio = 'https://www.myinstants.com/media/sounds/kasino_1.mp3'
      }
      if(msg.content === 'internacional') {
        var audio = 'https://www.myinstants.com/media/sounds/internacional_GFA5YpH.mp3'
      }
      if(msg.content === 'as baladas') {
        var audio = 'https://www.myinstants.com/media/sounds/asbaladas.mp3'
      }
      if(msg.content === 'ae') {
        var audio = 'https://www.myinstants.com/media/sounds/ae-kasinao_2.mp3'
      }
      if(msg.content === 'quem querover') {
        var audio = 'https://www.myinstants.com/media/sounds/quemquerover.mp3'
      }

      const audioPlayer = createAudioPlayer();

      const audioResource = createAudioResource(audio);

      audioPlayer.play(audioResource);
      connection.subscribe(audioPlayer);

      audioPlayer.on('error', (error) => {
        console.error('Audio player error:', error);
      });

      audioPlayer.on('stateChange', (oldState, newState) => {
        if (newState.status === 'idle') {
          connection.destroy();
        }
      });

      msg.reply('Playing audio in your voice channel.');
    } else {
      msg.reply('You need to join a voice chat channel first!');
    }
  }
});


client.login(process.env.TOKEN);