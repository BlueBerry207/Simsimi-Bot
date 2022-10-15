import { Bot } from './structure/Bot'
import events from './events'
import { TOKEN } from './config'
import { DB } from './config'
const mongoose = require("mongoose")

const bot = new Bot({
	token: TOKEN,
})

mongoose.connect(DB,{
}).then(console.log("DB connected"))

bot.registerEvents(events)

bot.login()
