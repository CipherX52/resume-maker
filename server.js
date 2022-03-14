require('dotenv').config({path:'./config.env'})
var express=require('express')
const path = require('path');
const connection=require('./src/utils/connection')
const userRouter=require('./src/routes/userRouter')
const resumeRouter=require('./src/routes/resumeRoute')
const adminRoute = require('./src/routes/adminRoute');
const cors=require('cors')
const fileUpload=require('express-fileupload');

const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/public',express.static('public'))
app.use(cors())
app.use(fileUpload())

//routers
app.use('/api/user',userRouter)
app.use('/api/resume',resumeRouter)
app.use('/api/admin',adminRoute)

//db connection
connection()

//after frontend production build is built, uncomment the 4 lines below
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

const PORT=process.env.PORT||8080

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
})