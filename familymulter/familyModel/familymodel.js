const mongoose = require ('mongoose')

const familySchema = new mongoose.Schema({
    fathersname: {
        type: String,
        require:true
    },
    mothersname: {
        type: String,
        require:true
    },
   fatherspicture: {
        type: String,
        require:true
    },
     motherspicture: {
        type: String,
        require:true
    },
    childrensname: {
        type: String,
        require:true
    },
   childrenspicture: {
        type: Array,
        require:true
    }
}, { timestamps: true })

const familyUser = mongoose.model("familyUser", familySchema)
module.exports=familyUser