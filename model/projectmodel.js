const mongoose=require("mongoose")

const user=mongoose.Schema({
firstName:{type:String},
lastName:{type:String},
salary:{type:String},
department:{type:String},
lastCompany:{type:String},
lasSalary:{type:String},
overallExp:{type:String},
contactInfo:{type:String},
yearGrad:{type:String},
gradStream:{type:String}
})
const projectmodel=mongoose.model("employee",user)
module.exports=projectmodel

