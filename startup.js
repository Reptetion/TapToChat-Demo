const { Client, MessageEmbed } = require('discord.js');
const fs = require('fs');

const bot = new Client();
bot.config = require('./config.json')

bot.on('ready', () => {
console.log('Ready');
});

bot.login(bot.config.token)

//Customer support 

bot.on('message', (message) => {

if(message.content.startsWith('hello' || 'Hello')) {
let helloEmbed = new MessageEmbed()
.setAuthor('TapToChat Bot', bot.user.avatarURL())
.setColor('BLUE')
.setDescription(`Hello ${bot.config.name}! I am TapToChat, a chatbot designed to help make life easier by assisting customers and making customer support service a lot faster. So how may I help you today?`)
.setFooter('© TapToChat Bot')
.setTimestamp()
message.channel.send(helloEmbed)
setTimeout(function() {
let optionsEmbed = new MessageEmbed()
.setAuthor('TapToChat Bot', bot.user.avatarURL())
.setColor('BLUE')
.setDescription("If you don't know where to start, how about these options? To select an option just type the number in the chat.\n\n#1. How do I login to D2L?\n#2. How do I check my grades?\n#3. How do I submit a assignnment via dropbox?")
.setFooter('For demo purposes, please type #3.')
.setTimestamp()
message.channel.send(optionsEmbed)
}, 8000)
}

if(message.content.startsWith('#3')) {
let option1 = new MessageEmbed()
.setAuthor('TapToChat Bot', bot.user.avatarURL())
.setColor('BLUE')
.setDescription("To submit an assignment via dropbox, head over to D2L and login. Once your in, click on the waffle icon and select the course you want. After that, locate Assessments and click on it. A list of options will appear, click on Dropboxes and find the dropbox you want!")
.setFooter('© TapToChat Bot')
.setTimestamp()
message.channel.send(option1)
}
    
if(message.content.startsWith('thanks' || 'Thanks')) {
let yourWelcome = new MessageEmbed()
.setAuthor('TapToChat Bot', bot.user.avatarURL())
.setColor('GREEN')
.setDescription("Your welcome! I hoped I helped solved your problem without leaving you with any doubts. If you find me interesting and your perhaps a business owner looking for a bot like me, check this [website](https://www.google.com) for more info on how to get chatbot like me for your own business.")
.setFooter('© TapToChat Bot')
.setTimestamp()
message.channel.send(yourWelcome)
setTimeout(function() {
let feedback = new MessageEmbed()
.setAuthor('TapToChat Bot', bot.user.avatarURL())
.setColor('RED')
.setDescription('This thread has been marked as resolved. If you like, please rate your customer experience from 1-5. It will be greatly appreciated and will go towards making things better!')
.setFooter('For demo purposes, please type 5.')
.setTimestamp()
message.channel.send(feedback)
}, 10000)
}
    
if(message.content.startsWith('5')) {
message.channel.send('Thanks for your feedback!')    
} 

});