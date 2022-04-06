const { BDS } = require("../../SQLSTARTUP/BDS")

const UploadSquense = async (bot,Discord,cfx)=>{
    BDS.StartSqlConnection(cfx)
    bot.on('message', (msg)=>{
        if(msg.content.startsWith(`${cfx.BotSettings.prefix}Sqlupload`)){
           const Msg = msg.content.slice(10).trim()
           const PingEmbed = new Discord.MessageEmbed()
           .setColor('GREEN')
           .setTitle('ZaySideKick SQL-Upload Cmd')
           .setDescription(`Command used by ${msg.author.username} \n Message Uploaded: ${Msg}`)
           msg.reply({embeds: [PingEmbed]})
            try {
                var GUILD_SAVED_MSG = `CREATE TABLE  GuildMessage(msg VARCHAR (225))`;
                BDU.UpLoadData(GUILD_SAVED_MSG)
            } catch (error) {
                console.log('Noticed Putin.GuildMessagesSQL')
            }
           setTimeout(() => {
            var GUILDMSG = `INSERT INTO  GuildMessage(msg) VALUES ('${Msg}')`;
            BDU.UpLoadData(GUILDMSG)
           }, 1000);
        }else if(msg.content === `${cfx.BotSettings.prefix}Sp`){
            ErrorEmbed(msg)
        }
    })
}
module.exports = UploadSquense