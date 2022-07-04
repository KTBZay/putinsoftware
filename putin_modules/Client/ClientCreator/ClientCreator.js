const { Net } = require('../../NetworkHook/hook');
const {SkyWalker} = require('../../NetworkHook/functions/server.SkyWalker')
module.exports = {
    botCreator: (token,prefix)=>{
        console.clear();
        console.log(SkyWalker.init)
        const Discord = require('discord.js');
        const bot = new Discord.Client({intents: ["GUILDS", 'GUILD_MESSAGES', 'GUILD_BANS']})
        bot.on('ready', ()=>{
            console.log(`i have started and have the intent Level of : ${bot.options.intents}}`);
            bot.user.setActivity(`${prefix}help | Version: 2.1`);
            Net.Createserver()
        })
        bot.on('message', (msg) => {
            if(msg.content === `${prefix}help`){
            const HelpCommand = new Discord.MessageEmbed()
                .setColor('BLUE')   
                .setTitle('Help Panel')
                .setThumbnail(bot.user.avatarURL())
                .setDescription('Get help or commands now!' + ` My prefix is ${prefix}`)
                .addFields([
                    {name:'help', value: 'shows help panel'},
                    {name: 'pingstaff', value: 'Puts staff to work'},
                    {name:'WhatPing', value: ' Gets the bot ping'},
                    {name:'Randomtype', value: ' Make the bot type'}
                ])
                .setTimestamp()
                .setFooter('Help Panel')
                msg.reply({embeds: [HelpCommand]})
            }
        })
        bot.on('message',(msg)=>{
            if(msg.content === `${prefix}pingstaff`){
                const SupportEmbed = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setDescription('is this bot having a issue? Do Y for yes and N for no. then put a reason for the ping')
                msg.reply({embeds: [SupportEmbed]})
            }
        })
        bot.on('message', (msg) => {
            if(msg.content.startsWith(`${prefix}yes`)){
                const issue = msg.content.slice(4).trim();
                const SupportEmbed = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setDescription('We are notifying support right now!')
                msg.reply({embeds: [SupportEmbed]})
                console.log(`User: ${msg.author} is reporting: ${issue}`)
            }else if(msg.content.startsWith(`${prefix}Y`)){
                const issue = msg.content.slice(2).trim();
                const SupportEmbed = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setDescription('We are notifying support right now!')
                msg.reply({embeds: [SupportEmbed]})
                const data = `User: ${msg.author} is reporting: ${issue}`
                console.log(data)
                
            }
        })
        bot.on('message', (msg) => {
            if(msg.content === `${prefix}no`  || msg.content === `${prefix}N`){
                const SupportEmbed = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setDescription('Please join https://discord.gg/nTJ3KMcB2E')
                msg.reply({embeds: [SupportEmbed]})
            }
        })
        bot.on('message', (msg) => {
            if(msg.content === `${prefix}WhatPing`){
                const PingEmbed = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setDescription(`my ping is: ${bot.ws.ping}`)
                msg.reply({embeds: [PingEmbed]})
            }
        })
        bot.on('message', (msg) => {
            if(msg.content === `${prefix}Randomtype`){
                msg.channel.sendTyping()
            }
        })
        bot.on('message', (msg) => {
            if(msg.content === `${prefix}avatar`){
                msg.reply(bot.user.avatarURL())
            }
        })
        bot.login(token)
    }
}
