const model = require("../model/projectmodel")
const addData=async function(req,res){
    const employeeData = req.body
    try{
        const data = await model.insertMany(employeeData)
        console.log("insertResponse",data)
        return res.status(200).send({sucess:data})
    }
    catch(err){
        console.log("error in saving the data",err);
        return res.status(200).send({message:"something went wrong while inserting data"})
    }
}

const getData = async (req, res) => {
    const data = await model.find({})
    console.log(data)
    return res.send(data)
}
const getSalary = async (req, res) => {
    const data = await model.find({ "salary": { $gt: "30000" } })
    console.log(data)
    return res.send(data)
}
const getExperience = async (req, res) => {
    const data = await model.find({ "overallExp": { $gte: "2" } })
    console.log(data)
    return res.send(data)
}
const getGraduationyearAndExperience = async (req, res) => {
    const data = await model.find({ "yearGrad": { $gt: "2015" }, "overallExp": { $gt: "1" } })
    console.log(data)
    return res.send(data)
}
const salaryUpdate = async (req, res) => {
    const data = await model.updateMany({ "salary": { $gt: "30000" } }, { $set: { "salary": "30000" } })
    console.log(data)
    return res.send(data)
}
const deleteDocuments = async (req, res) => {
    const data = await model.deleteMany({ "lastCompany": "Y" })
    console.log(data)
    return res.send(data)
}

module.exports = { addData, getData, getSalary, getExperience, getGraduationyearAndExperience, salaryUpdate, deleteDocuments }
// module.exports={addData}