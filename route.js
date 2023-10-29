const express = require("express");
const router = express.Router()

const StudentController = require("../Controller/studentcontroller")
router.post("/register",StudentController.CreateStudent);
module.exports=router;