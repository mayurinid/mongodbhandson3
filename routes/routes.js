const route=require("express").Router()
const { addData, getData, getSalary, getExperience, getGraduationyearAndExperience, salaryUpdate, deleteDocuments }=require("../controller/employee")

// const {addData}=require("../controller/employee")
route.post("/postData",addData)
route.get("/getData",getData)
route.get("/getSalary",getSalary)
route.get("/getExperience",getExperience)
route.get("/getGraduationyearAndExperience",getGraduationyearAndExperience)
route.put("/salaryUpdate",salaryUpdate)
route.delete("/deleteDocuments",deleteDocuments)

module.exports=route