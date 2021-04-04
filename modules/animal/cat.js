const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = class animal extends Command {
    constructor(client) {
        super(client, {
            name: 'cat',
            group: 'animal',
            memberName: 'cat',
            description: 'cat',
        })
    }
  run(msg) {
    
    axios
        .get('https://api.thecatapi.com/v1/images/search')
        .then((res) => {
        ('RES', res.data.url)
      
        const UwU = new MessageEmbed()
            .setImage(res.data.url)

        msg.channel.send(UwU)
    })
  }
}
