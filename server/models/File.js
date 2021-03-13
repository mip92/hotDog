const {Schema, model} = require('mongoose')

const File = new Schema({
    name: {type: String, required: true, unique:true},
    logo:{type: String, required: true},
    price: {type: Number, required: true},
    description:{type:String,default:" "},
})
module.exports = model("File", File)