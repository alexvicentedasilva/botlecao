const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(async ctx => {
    await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}! 😎`)
    await ctx.replyWithHTML(`Destacando a mensagem <b>HTML</b>
        <i>de várias</i> <code>formas</code> <pre>possíveis</pre>
        <a href="https://t.me/+HPm9mC42pUw0OWFh">CursoBot</a>`)
    await ctx.replyWithMarkdown('Destacando mensagem *Markdown*'
    + ' _de varias_ `formas` ```possíveis``` '
    +' [Google] (http://www.google.com)')
    await ctx.replyWithPhoto({source:`${__dirname}/cat.jfif`})
    await ctx.replyWithPhoto('http://files.cod3r.com.br/curso-bot/gato1.jpg',
    { caption: 'Oha o estilo!' })
    await ctx.replyWithPhoto({ url: 'http://files.cod3r.com.br/curso-bot/gato2.jpg'})
    await ctx.replyWithLocation(29.9773008, 31.1303068)
    await ctx.replyWithVideo('http://files.cod3r.com.br/curso-bot/cod3r-end.m4v')
})

bot.startPolling()
