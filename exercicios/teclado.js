const env = require('../.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

//esse teclado sempre fica aparecendo
const tecladoComida = Markup.keyboard([
    ['🐷 Porco', '🐔 Galinha', '🐏 Carneiro'],
    ['🐄 Vaca', '🍳 Ovo','🍌 Banana'],
    ['🐟 Peixe'],
    ['🍨 Sorvete']
]).resize().extra()

bot.start(async ctx => {
    await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}!`)
    await ctx.reply(`Qual bebida você prefere?`,
         Markup.keyboard(['Coca','Pepsi']).resize().oneTime().extra()) //aparece so uma vez
})

bot.hears(['Coca','Pepsi'], async ctx => {
    await ctx.reply(`Nossa! Eu também gosto de ${ctx.match}`)
    await ctx.reply('Qual a sua comida predileta?',tecladoComida)  
})

bot.hears('🐄 Vaca', ctx => ctx.reply('A minha predileta também.'))
bot.hears('🍨 Sorvete', ctx => ctx.reply('Cuidado com o açúcar rsrs'))
bot.on('text', ctx => ctx.reply('Legal!'))

bot.startPolling()