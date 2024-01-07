const familySchema = require("../familyModel/familymodel")
const fs = require("fs")

exports.signup = async (req, res) => {
    try {
            
        const { fathersname, mothersname, childrensname } = req.body
        const file= req.files
        const famprofile = await familySchema.create({
            fathersname,
            mothersname,
            fatherspicture:file.filename,
            motherspicture: file.filename,
            childrensname,
             childrenspicture:file.filename
        })
       if(!famprofile){
           res.status(400).json({
            message:"unable to upload"
        })
       } else {
           res.status(200).json({
               message: "uploadede successfully",
                famprofile
           })
       }

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}