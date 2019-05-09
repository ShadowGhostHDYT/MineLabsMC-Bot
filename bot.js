const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTc1NzgwMjg5ODU5NTUxMjg2.XNRm_g.XYJrpuwJ1b_pISXfBe4X0cv5zIs);
