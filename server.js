require('dotenv').config({path:"./config.env"});
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use("/api/auth", require("./routes/auth"));
// app.use("/api/user", require("./routes/userRoutes"));
// app.use("/api/admin", require("./routes/adminRoutes"));

const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,
        useUnifiedTopology:true
    });

    console.log("MongoDB connected");
}

connectDB();

//after frontend production build is built, uncomment the 4 lines below
// app.use(express.static(path.resolve(__dirname, "./client/build")));
// app.get("*", function (request, response) {
//     response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
//   });

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
})