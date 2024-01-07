const express = require("express")

const { familyupload } = require("../familyUtils/familymulter")
const {signup}= require("../familymulter/familymulterCon")
 const router = express.Router()
router.post("sign-up",familyupload.single('fatherspicture'),signup)
  
module.exports= router