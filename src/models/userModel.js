const mongoose=require('mongoose')

//schema for a new user registering to the database

const userSchema= mongoose.Schema({
username:{type:String,unique:true},
email:{type:String,unique:true},
password:String,
role:String
})

module.exports=mongoose.model('user',userSchema)