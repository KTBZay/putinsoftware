const { EventEmitter } = require('stream');
const { StartSqlConnection } = require('../Sql/SQLSTARTUP/BDS');

const  PutinClient = async ({name=" ",cfx = cfx}) =>{
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var output = d.getFullYear() + '/' +
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day;
    const fs = require('fs')
    const { BDU } = require('../Sql/SQLUPLOAD/BDU');
    const UploadSquense = require('../Sql/SQLUPLOAD/cmds/upload');
    const package = require('../../../package.json')
    const PUTIN = require('../../../putin.json')
    const Discord = require('discord.js');
    const bot = new Discord.Client({intents: ["GUILDS", 'GUILD_MESSAGES']})
    bot.on('ready', ()=>{
        console.log(cfx.BotSettings.ReadyMSG + ` Intent Level: ${bot.options.intents}  \n Todays Date: ${output}`);
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
               {name: 'Sqlupload', value:'Upload data to a sql'},
               {name: 'kick', value: 'Kicks a user'},
               {name: 'ban', value: 'ban a user'},
               {name: 'add', value: 'add a role to a  user'},
               {name: 'remove', value: 'Removes a role from a user'},
               {name: 'purge', value: 'Deletes messages'},
               {name: 'rps', value: 'Play rock paper scissors'}
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
               {name: 'Sqlupload', value:'Upload data to a sql'},
               {name: 'kick', value: 'Kicks a user'},
               {name: 'ban', value: 'ban a user'},
               {name: 'add', value: 'add a role to a  user'},
               {name: 'remove', value: 'Removes a role from a user'},
               {name: 'purge', value: 'Deletes messages'},
               {name: 'rps', value: 'Play rock paper scissors'}
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
        const ModLogs = `INSERT INTO ModLogs(MsgAuthor,MsgDate,Msg ) VALUES ('${msg.author.username}','${output}', '${msg}')`;
        if(!fs.existsSync(`./logs/`)){
            fs.mkdir('./logs/', (err)=>{
                console.log(err)
            })
        }
        BDU.UpLoadData(ModLogs,cfx);
        fs.writeFileSync(`./logs/lastmsg.txt`,`Author: ${msg.author.username} Message: ${msg}, on ${output}`, {flag: 'w'})
})
    
    bot.on('message', (msg)=>{
        if(msg.content === `${cfx.BotSettings.prefix}kick`){
            const member = msg.mentions.members.first();
            if (!member)
            return msg.channel.send("You have not mentioned a user").then(msg => {
             msg.delete({ timeout: 30000 })
            })
            if (!member.kickable)
            return msg.channel.send("This user is unkickable").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const reason = args.slice(1).join(" ")
        if (member) {
            if (!reason) return member.kick().then(member => {
                msg.channel.send(`${member.user.tag} was kicked, no reason was provided`);
            })

            if (reason) return member.kick().then(member => {
                msg.channel.send(`${member.user.tag} was kicked for ${reason}`);
            })
        }
        }

    })
    bot.on('message', (message)=>{
        if(message.content === `${cfx.BotSettings.prefix}ban`){
        const member = message.mentions.members.first();
        if (!member)
            return message.channel.send("You have not mentioned a user").then(msg => {
                message.delete({ timeout: 30000 })
    })
        if (!member.bannable)
            return message.channel.send("This user is unbannable").then(msg => {
                message.delete({ timeout: 30000 })
    })
        const reason = args.slice(1).join(" ")
        if (member) {
            if (!reason) return member.ban().then(member => {
                message.channel.send(`${member.user.tag} was banned, no reason was provided`);
            })

            if (reason) return member.ban(reason).then(member => {
                message.channel.send(`${member.user.tag} was banned for ${reason}`);
            })
        }
        }
    })
    bot.on('message', (message)=>{
        if(message.content === `${cfx.BotSettings.prefix}add`){
    const member = message.mentions.members.first()
    if (!member)
        return message.channel.send("You have not mentioned a user").then(msg => {
    msg.delete({ timeout: 30000 })
})
    const add = args.slice(1).join(" ")
    if (!add)
        return message.channel.send("You have not specified a role").then(msg => {
    msg.delete({ timeout: 30000 })
})
    const roleAdd = message.guild.roles.cache.find(role => role.name === add)
    if (!roleAdd)
        return message.channel.send("This role does not exist").then(msg => {
    msg.delete({ timeout: 30000 })
})
    if (member.roles.cache.get(roleAdd.id))
        return message.channel.send(`This user already has the ${add} role`).then(msg => {
    msg.delete({ timeout: 30000 })
})
    member.roles.add(roleAdd.id).then((member) => {
        message.channel.send(`${add} added to ${member.displayName}`)
    })
}
    bot.on('message', (message) =>{
        if(message.content === `${cfx.BotSettings.prefix}remove`){
    const member = message.mentions.members.first()
    if (!member)
        return message.channel.send("You have not mentioned a user").then(msg => {
    msg.delete({ timeout: 30000 })
})
    const remove = args.slice(1).join(" ")
    if (!remove)
        return message.channel.send("You have not specified a role").then(msg => {
    msg.delete({ timeout: 30000 })
})
    const roleRemove = message.guild.roles.cache.find(role => role.name === remove)
    if (!roleRemove)
        return message.channel.send("This role does not exist").then(msg => {
    msg.delete({ timeout: 30000 })
})
    if (!member.roles.cache.get(roleRemove.id))
        return message.channel.send(`This user does not have the ${remove} role`).then(msg => {
    msg.delete({ timeout: 30000 })
})
    member.roles.remove(roleRemove.id).then((member) => {
        message.channel.send(`${remove} removed from ${member.displayName}`)
    })
}

    })
    })
    bot.on('message', (message)=>{
        if(message.content === `${cfx.BotSettings.prefix}purge`){
            const number = message.content.slice(6).trim()
            if(!number) return message.channel.send("You havent specified a number to purge").then(msg => {
                msg.delete({ timeout: 30000 })
            })
           message.channel.bulkDelete(number)
        }
    })
    bot.on('message', (message)=>{
        if(message.content === `${cfx.BotSettings.prefix}rps`){
            const options = [
                "rock :shell: ",
                "paper :newspaper2:",
                "scissors :scissors: "
            ]
            const option = options[Math.floor(Math.random() * options.length)]
            message.channel.send(`You got ${option}`)
        }
    })
    bot.on('message', (msg)=>{
        if(msg.content === `${cfx.BotSettings.prefix}Lastmsg`){
            const Awaiting_Logs = 'Please wait i am getting the logs now.'
            msg.reply(Awaiting_Logs);
            setTimeout(() => {
                const lastmsg = fs.readFileSync('./logs/lastmsg.txt', {encoding: 'utf-8'})
                msg.reply(lastmsg);
            }, 5000);
        }
    })
    bot.on('message', (msg)=>{
        const GiveawayUser = msg.author.username;
        const GiveawayUserId = msg.author.id;
        if(msg.content === `${cfx.BotSettings.prefix}EnterGiveaway`){
            msg.reply(`Welcome ${GiveawayUser}, Are you trying to join a giveaway?`)
            const Give_awaytable = `CREATE TABLE Giveaways`
            BDU.UpLoadData(Give_awaytable,cfx)
              
        }
        if(msg.content === `${cfx.BotSettings.prefix}no`){
            msg.reply(`We have not added you to the Giveaway Database`)
        }
        if(msg.content === `${cfx.BotSettings.prefix}yes`){
            const GIVEAWAY_TABLE = `CREATE TABLE Giveaways(User VARCHAR(255), Userid VARCHAR(255))`;
            BDU.UpLoadData(GIVEAWAY_TABLE,cfx)
            setTimeout(()=>{
                const Upload = `INSERT INTO Giveaways(User,Userid) VALUES ('${GiveawayUser}', '${GiveawayUserId}')`
                BDU.UpLoadData(Upload,cfx);
                msg.reply(`I have entered these details \n Username: ${GiveawayUser} \n UserID: ${GiveawayUserId}`);

            })
        }
    })
    UploadSquense(bot,Discord,cfx)
bot.login(cfx.BotSettings.token)
}
module.exports = {
    PutinClient
}