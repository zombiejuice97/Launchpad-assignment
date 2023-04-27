const mongoose = require('mongoose');

const exercisesData = mongoose.Schema(
    {
        name:{type:String,required:true},
        length:{type:Number,required:true}
    }
);  

const fitnessProgramSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please add program name."]
        },
        exercises:[exercisesData]
    },
    {
        timestamps:true
    }
);



module.exports = mongoose.model("FitnessProgram",fitnessProgramSchema);