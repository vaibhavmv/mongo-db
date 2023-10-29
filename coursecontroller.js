const { response } = require("express")
const Studentmodel=require("../model/studentmodel");
const studentmodel = require("../model/studentmodel");
let CreateStudent = async(req,res)=>{
    try{                  
        let data = req.bod
        let register = await studentmodel.create(data);
        return res.status(201).send({status:true, 
            msg:"student Registered successfully",
            data:register,
        });
    } catch(error) {
        return res
        .status(500)
        .send({ status:false,msg:"internal server error"});
    }
};
module.exports=(CreateStudent)