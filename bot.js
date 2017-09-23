const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('MzYwNzUyNjI5ODI1MTQyNzk0.DKaO0Q.YxBEIN2H7uYpN4oebsTKxff_X7Y');

bot.on('message', message => {
let responseObject = {
    ".regras" : "Não tente floodar ou sentirá o poder da minha espada!!!! Não mande nada +18 fora da área nsfw se não corto sua vareta fora!!!!"
};

if(responseObject[message.content]){
    message.channel.send(responseObject[message.content]);
}
if(message.content.startsWith('.roleta')){
    randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    if(randomNumber == 4){
        message.reply("Seu Olimpo acaba de ser destruído por mim!!!");
    }
    else{
        message.reply("Você tem muita sorte por ter mantido seu olimpo de pé!!!!");
    }
}

let role = message.guild.roles.find("name", "Admin");
if(message.content.startsWith(".delete")){
    msgDel = 10;
    let numberMessages = parseInt(msgDel);
    message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));
}

});
