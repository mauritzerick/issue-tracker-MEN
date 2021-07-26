const mongoose = require ('mongoose')

var schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status : String
})

const Issuedb = mongoose.model('issuedb',schema);

module.exports = Issuedb;