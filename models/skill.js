import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const skillSchema = new Schema({
  text: String,

  acquire: Boolean,
})

// Compile the schema into a model and export it
const Skill = mongoose.model('Skill', todoSchema)

export {
  Skill
}