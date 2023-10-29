console.log("hello");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./router/route");

app.use(express.json());
app.use("/",routes );

//Db connection
mongoose
    .connect("mongodb+srv://vaibhavmv344:VAIBHAVMV6@cluster0.epozpgo.mongodb.net/")
    .then(()=>{
        console.log("DB Connected");
    })
    .catch((err)=>{
        console.log(err,"Something Went wrong");
    })


    app.get("/test",(req,res)=>
    { res.send("hello emmhghgjhga")
    });
    app.listen(5000, () => {
        console.log("Server is Connected");
    });