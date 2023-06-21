const mongoose=require("mongoose")
mongoose.set("strictQuery",true)
const url="mongodb://127.0.0.1:27017/Human_resources"

const connect=async()=>{
    try{
const client =await mongoose.connect(url)
console.log("connected to the db sucessfully");
return client    
}
    catch(err){
console.log("error in connection to the db");
    }
}
module.exports=connect