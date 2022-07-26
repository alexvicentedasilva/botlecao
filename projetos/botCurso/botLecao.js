const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const axios = require ('axios')
const bot = new Telegraf(env.token)

const tecladoOpcoes = Markup.keyboard([
    ['🙏🏻 Contribua com o projeto?', '🖥️ Programação'],
    ['💰 Dinheiro','👨‍🎨 Design', '📱APK Úteis'],
    ['Quer que eu faça um BOT pra vc?']
]).resize().extra()

// no teclado inline tem botoes que levam a acoes
const botoes1 = Extra.markup(Markup.inlineKeyboard([  
    Markup.callbackButton('Full Stack','fullstack'),
    Markup.callbackButton('JAVA','jAVA'),
    Markup.callbackButton('JavaScript','javaScript'),
    Markup.callbackButton('MOBILE','mobile'),
    Markup.callbackButton('ChatBot','chatbot'),
    Markup.callbackButton('Hacking','hacking'),
    Markup.callbackButton('Database','database'),
], {columns: 3}))

const botoes2 = Extra.markup(Markup.inlineKeyboard([  
    Markup.callbackButton('Photoshop','photoshop'),
    Markup.callbackButton('UI e UX','uieux'),
], {columns: 2}))

const botoes3 = Extra.markup(Markup.inlineKeyboard([  
    Markup.callbackButton('Trader Esportivo','trader'),
    Markup.callbackButton('Investimentos','investimentos'),
    Markup.callbackButton('Renda Extra','rendaextra')
], {columns: 3}))

const botoes4 = Extra.markup(Markup.inlineKeyboard([  
    Markup.callbackButton('Filmes','filme'),
    Markup.callbackButton('Músicas','musica'),
    Markup.callbackButton('APK ','apk')
], {columns: 3}))

//const localizacao = Markup.keyboard([
 //   Markup.locationRequestButton('Clique aqui para enviar a sua localização')
//]).resize().oneTime().extra()

bot.start(async ctx => {
    const nome = ctx.update.message.from.first_name
    await ctx.replyWithMarkdown(`*Olá, ${nome}!*\nEu sou o seu bot`)
    await ctx.replyWithPhoto('http://files.cod3r.com.br/curso-bot/bot.png')
    await ctx.replyWithMarkdown(`_Posso te ajudar em algo?_`, tecladoOpcoes)
})

bot.hears('🙏🏻 Contribua com o projeto?', ctx => {
    
    ctx.replyWithMarkdown('[🙏Clique aqui😇](https://t.me/+dfCMcN02NRZmZTQx)', tecladoOpcoes)
})

bot.hears('🖥️ Programação', async ctx => {
   
    await ctx.replyWithMarkdown('*Aqui estão os cursos! Clique para acessar*', botoes1)
})

bot.hears('👨‍🎨 Design', async ctx =>{
    await ctx.replyWithMarkdown('*Aqui estão os cursos! Clique para acessar*', botoes2)

})

bot.hears('💰 Dinheiro', async ctx =>{
    await ctx.replyWithMarkdown('*Aqui estão os cursos! Clique para acessar*', botoes3)
})

bot.hears('📱APK Úteis', async ctx =>{
    await ctx.replyWithMarkdown('*Aqui estão os cursos! Clique para acessar*', botoes4)
})

bot.hears('Quer que eu faça um BOT pra vc?', async ctx =>{
    await ctx.replyWithMarkdown('*Me chame no whatsApp*(https://wa.me/5519988705519)', tecladoOpcoes)
})

bot.action('fullstack', ctx => {
    ctx.reply('[PROGRAMADOR-BR Full Stack](https://t.me/+j0faRj1b9JthMzQ5)'),
    ctx.reply('[Formação Desenvolvedor Moderno- nélio alves](https://t.me/+IKPTes-mmUc2MWJh)'),
    ctx.reply('[Dankicode Full Stack](https://t.me/+TYbNdjcPnw83OWQx)'), 
    ctx.reply('[Bootcamp Rocketseat 11.0 ](https://t.me/+JzRDygySVaNiYWYx)'), 
    ctx.reply('[Full-stack Python](https://t.me/+rSaBBpI8l01iZTNh)'),
    ctx.reply('[Ignite trilha Nodejs](https://t.me/+cLPQXSlUhoJlNWNh)'),
    ctx.reply('[Ignite trilha React](https://t.me/+7kNFS_U9MZQ0NzAx)'),
    ctx.reply('[Ignite trilha React Native](https://t.me/+U0HRprbJIK9kYTAx)'),
    ctx.reply('[B7web Full stack](https://t.me/+upw__FxzuUxhMDQx)'),
    ctx.reply('[Bootcamp React 3.0- Nélio Alves](https://t.me/+ZbdVlST76rRkZDIx)')
    ctx.reply('[Bootcamp Spring 3.0- Nélio Alves](https://t.me/+cvadpDlbXYswYTBh)') 
})

bot.action('jAVA', ctx => {
    ctx.reply('[Java completo -Cod3r](https://t.me/+eYm5QFY7j_A1NmJh)')     
})

bot.action('javaScript', ctx => {
    ctx.reply('[JavaScript OneBitCode] (https://t.me/+rcHi8dgWkNIzZjVh)')
    
})

bot.action('mobile', ctx => {
    ctx.reply('Ok, não precisa ser grosso! :(', tecladoOpcoes)    
})

bot.action('chatbot', ctx => {
    ctx.reply('[Robo no Telegram c/ Python](https://t.me/+bRSijzSHRJQzMDRh)'),
    ctx.reply('[Chatbot Telegram Nodejs](https://t.me/+HPm9mC42pUw0OWFh)') 
})

bot.action('hacking', ctx => {
    ctx.reply('Ok, não precisa ser grosso! :(', tecladoOpcoes)
    
})

bot.action('database', ctx => {
    ctx.reply('Ok, não precisa ser grosso! :(', tecladoOpcoes)
})

bot.action('photoshop', ctx => {
    ctx.reply('Ok, não precisa ser grosso! :(', tecladoOpcoes)
})

bot.action('uieux', ctx => {
    ctx.reply('Ok, não precisa ser grosso! :(', tecladoOpcoes)
})

bot.action('trader', ctx => {
    ctx.reply('[CornerPro -TevoSoares](https://t.me/+OGcmSTJxAeQ4NDY5)',)
    ctx.reply('[ESCANTEVO-TevoSoares](https://t.me/+gCTYs6dEQ8BmMDYx)',)
})

bot.action('investimentos', ctx => {
    ctx.reply('Ok, não precisa ser grosso! :(', tecladoOpcoes)
})

bot.action('rendaextra', ctx => {
    ctx.reply('Ok, não precisa ser grosso! :(', tecladoOpcoes)
})

bot.action('musica', ctx => {
    ctx.reply('Ok, não precisa ser grosso! :(', tecladoOpcoes)
})

bot.action('apk', ctx => {
    ctx.reply('[Aplicativos Android] (https://t.me/+OGcmSTJxAeQ4NDY5)', tecladoOpcoes)
})

bot.action('filme', ctx => {
    ctx.reply('Ok, não precisa ser grosso! :(', tecladoOpcoes)
})

bot.startPolling()