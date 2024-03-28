const{Schema,model}=require('mongoose')

const Note= new Schema({
    title:{
        type:String,
        required:true
    },
    descriptions:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=model('Note',Note)