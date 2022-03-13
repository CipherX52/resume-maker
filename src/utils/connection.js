var mongoose=require('mongoose')

const connection=()=>{
    try {
        mongoose.connect(process.env.MONGODB_URI, {UseNewUrlParser:true,UseUnifiedTopology:true})
        console.log('database connected')
    } catch (err) {
        console.log('error connecting to database')
    }
}

module.exports=connection