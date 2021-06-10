require('dotenv').config()

//Refering to the Packages


var Discord = require('discord.js');
var noblox = require('noblox.js');
var bot = new Discord.Client();
const fs = require('fs')
var config = require('./config.json')
bot.commands = new Discord.Collection()
const commandfiles = fs.readdirSync(`./Commands/`).filter(file => file.endsWith('.js'))

for (const file of commandfiles){
    const command = require(`./Commands/${file}`)
    bot.commands.set(command.name,command);
}


bot.on('message' , (message) => {
// Variables

var msg = message.content.toLowerCase()
var prefix = 'f!'
var args = message.content.split(/ +/)






 

if(message.author.bot) return ; // If message.author is a bot it ignores it
if(message.channel.type === 'dm') return ; // Ignores Dm's to prevent errors from the bot




if (msg.startsWith(prefix + 'userinfo')) {
    bot.commands.get(`UserInfo`).execute(message, msg);
}

    if (msg.startsWith(prefix + 'rank')) {
        if (message.member.roles.cache.has(`851257230074183720`)) {
            bot.commands.get(`Rank`).execute(message, msg, args, config);
        }

        else message.reply("You do not have the permission to use this command.")
    }







});


bot.on ('ready' , async () => {

    console.log("The Bot is Running")
    await noblox.setCookie(config.Cookie);



        // Code to Run when the Bot Logs in

});

bot.login("ODUwNzAxNDgyNDMzMzE0ODQ2.YLtjfg.G1_L0DuebpYRN4YGqpdtnsN7guw")