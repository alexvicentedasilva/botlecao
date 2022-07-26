const env = require('../.env')
const Telegraf = require("telegraf")
const moment = require('moment')
const bot = new Telegraf (env.token)

bot.hears('pizza', ctx => ctx.reply('Quero!'))
bot.hears(['fígado', 'chuchu', 'jiló'], ctx => ctx.reply('Passo!'))
bot.hears('🐷', ctx => ctx.reply('Bacon 😋'))
bot.hears(/burguer/i, ctx => ctx.reply('Quero!')) //expressoes regulares ignora letras maiuscula e minuscula
bot.hears([/dog/i , /salsicha/i , /almodega/i], ctx => ctx.reply('Gosto desse alimento'))
bot.hears(/(\d{2}\/\d{2}\/\d{4})/, ctx => {
    moment.locale('pt-BR')
    const data = moment(ctx.match[1], 'DD/MM/YYYY')
    ctx.reply(`${ctx.match[1]} cai na ${data.format('dddd')}`)
})

bot.startPolling()