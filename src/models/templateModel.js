const mongoose=require('mongoose')

//schema for a resume template which an admin can add to the db

const templateSchema= mongoose.Schema({
templateName:String,
template:String,
createdOn:Number
})


module.exports=mongoose.model('template',templateSchema)