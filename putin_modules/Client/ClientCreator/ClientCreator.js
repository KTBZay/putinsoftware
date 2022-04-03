const UploadSquense = require('../../Sql/SQLUPLOAD/cmds/upload');

const ClientCreator = async (name,cfx) =>{
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var output = d.getFullYear() + '/' +
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day;
    const package = require('../../../package.json')
    const PUTIN = require('../../../putin.json')
    const Discord = require('discord.js');
    const bot = new Discord.Client({intents: ["GUILDS","GUILD_MESSAGES", "GUILD_MEMBERS"]});
    bot.on('ready', ()=>{
        console.log(cfx.BotSettings.ReadyMSG + `\n Todays Date: ${output}`);
        bot.user.setActivity(cfx.BotSettings.Activity);
    })
    bot.on('message', (msg)=>{
        if(msg.content === `${cfx.BotSettings.prefix}help`){
           const HelpEmbed = new Discord.MessageEmbed()
           .setColor('DARK_GREEN')
           .setTitle(`${name} Help Cmd`)
           .setDescription(`Command used by ${msg.author.username}`)
           .addFields(
               {name: 'ping', value: 'Returns the ping of the bot'},
               {name: 'build', value: 'Shows the development details for the bot'},
               {name: 'SQL', value:'Showes if sql is enabled for this bot.'},
               {name: 'Say', value: 'Say a message'},
               {name: 'Sqlupload', value:'Upload data to a sql'}
           )
           msg.reply({embeds: [HelpEmbed]})
        }else if(msg.content === `${cfx.BotSettings.prefix}h`){
            const HelpEmbed = new Discord.MessageEmbed()
           .setColor('DARK_GREEN')
           .setTitle(`${name} Help Cmd`)
           .setDescription(`Command used by ${msg.author.username}`)
           .addFields(
               {name: 'ping', value: 'Returns the ping of the bot'},
               {name: 'build', value: 'Shows the development details for the bot'},
               {name: 'SQL', value:'Showes if sql is enabled for this bot.'},
               {name: 'Say', value: 'Say a message'},
               {name: 'Sqlupload', value:'Upload data to a sql'}
              
           )
           msg.reply({embeds: [HelpEmbed]})
        }
    })
    bot.on('message', (msg)=>{
        if(msg.content === `${cfx.BotSettings.prefix}ping`){
           const PingEmbed = new Discord.MessageEmbed()
           .setColor('GREEN')
           .setTitle(`${name} Ping Cmd`)
           .setDescription(`Command used by ${msg.author.username} \n Clients ping is: ${bot.ws.ping}`)
           msg.reply({embeds: [PingEmbed]})
        }else if(msg.content === `${cfx.BotSettings.prefix}p`){
            const PingEmbed = new Discord.MessageEmbed()
           .setColor('GREEN')
           .setTitle(`${name} Ping Cmd`)
           .setDescription(`Command used by ${msg.author.username} \n Clients ping is: ${bot.ws.ping}`)
           msg.reply({embeds: [PingEmbed]})
        }
    })
    bot.on('message', (msg)=>{
        if(msg.content === `${cfx.BotSettings.prefix}build`){
           const PingEmbed = new Discord.MessageEmbed()
           .setColor('GREEN')
           .setTitle(`${name} Build Cmd`)
           .setDescription(`Command used by ${msg.author.username} \n Discord-Version: ${package.dependencies['discord.js']} \n PutinJs-Version: ${PUTIN.Version} \n Author: ${package.author}`)
           msg.reply({embeds: [PingEmbed]})
        }else if(msg.content === `${cfx.BotSettings.prefix}b`){
            const PingEmbed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(`${name} Build Cmd`)
            .setDescription(`Command used by ${msg.author.username} \n Discord-Version: ${package.dependencies['discord.js']} \n PutinJs-Version: ${PUTIN.Version} \n Author: ${package.author}`)
            msg.reply({embeds: [PingEmbed]})
        }
    })
    bot.on('message', (msg)=>{
        if(msg.content.startsWith(`${cfx.BotSettings.prefix}say`)){
           const Msg = msg.content.slice(4).trim()
           const PingEmbed = new Discord.MessageEmbed()
           .setColor('GREEN')
           .setImage(msg.author.avatarURL)
           .setTitle(` ${name} ZaySideKick Say Cmd`)
           .setDescription(`Command used by ${msg.author.username} \n Said: ${Msg}`)
           msg.reply({embeds: [PingEmbed]})
}});
    bot.on('message', (msg) => {
        console.log(`Author: ${msg.author.username} Message: ${msg}, on ${output}`);
    })
    UploadSquense(bot,Discord,cfx)
    
bot.login(cfx.BotSettings.token)
}
module.exports = {
    ClientCreator
}