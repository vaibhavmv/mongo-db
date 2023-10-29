const mongoose = require("mongoose");
let courseSchema = new mongoose.Schema({
    Course_name:{
        type:String,
        required:trusted
    },
    Author:{
        type: String,
        required:true,
        unique:true,
    },
    Subject_code:{
        type: String,
        required:true,
        unique:true,
    },
    Subject_name:{
        type: String,
        required:true,
        unique:true,
    },
    Duration_in_months:{
        type:Number,
        required:true,
        unique:true,
    },
    Password:{
        type: String,
        required:true,
        unique:true,                                                                                
    }
},{timestamps:true}); 

module.exports=new mongoose.model("Course",CourseSchema);