const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
dotenv.config()
const cors = require('cors');
app.use(cors());
app.use(express.json())
app.use(cookieParser())

/*  Mongodb connection link via link */ 
const dbLink = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.syj9r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
/*  connecting it to the code via library called mongoose*/ 
mongoose.connect(dbLink).then(function(connection){
    console.log("connected to db")
}).catch(err => console.log(err))

const authRouter = require('./routers/authRouter');

app.use('/api/auth',authRouter);

app.listen(3010,function(){
    console.log("server started in port 3010");
})