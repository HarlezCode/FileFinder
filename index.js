const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
const prefix = '!'
bot.on('ready', () =>{
    console.log('this bot is online!');
})

bot.on('message', message =>{
    let msg = message.content.toUpperCase();
    let args = message.content.substring(prefix.length).split(" ")
    if (!msg.startsWith(prefix)) return;
    if (message.author.bot) return;
    let cmd = args.shift().toLowerCase();
    
    try {
        let commandfile = require(`./commands/${cmd}.js`);
        commandfile.run(bot,message,args);
    } catch(e){
        console.log(e.stack);
        message.reply("No command found") 
    } finally {
        console.log('success');
    }
    
})


bot.login(token);