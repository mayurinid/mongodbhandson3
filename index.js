const express=require("express")
const app=express()
const route=require("./routes/routes")
const connect=require("./database/db")
const bodyParser=require("body-parser")
const dotenv=require("dotenv")
dotenv.config()
app.use(bodyParser.json())
app.use(route)

app.get("/",(req,res)=>{
    res.send("API is running Fine")
})
const port=process.env.PORT
app.listen(port,async()=>{
    try{
        console.log("Server started");
        await connect()
    }
    catch(err){
        console.log(`error is starting the server ${err}`);
    }
   
})