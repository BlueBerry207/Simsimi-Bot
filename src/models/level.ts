import { Schema, model } from 'mongoose'

const level = new Schema({
    guildId: { type: String, unique: true},
    level: { type: String }
})

const Level = model('leveln', level, 'leveln')

export default Level