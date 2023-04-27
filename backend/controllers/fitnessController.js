//Data model imports 
const program = require("../models/fitnessProgramSchema");
const exercise = require("../models/exercisesSchema");

const createFitProgram = async (req,res)=>{
    try {
        const {name,exercises} = req.body   
        const Exercise = await exercise.create(exercises)
        const newFitprogram = {
            name:name,
            exercises:[Exercise]
        }
        const Program = await program.create(newFitprogram);
        res.send(Program);
    } catch (error) {
        res.send(error);
    }
}

const getFitPrograms = async(req,res)=>{
    try {
        const Programs = await program.find();
        res.json(Programs);
    } catch (error) {
        res.send(error);
    }
}

const deleteFitProgram = async (req,res)=>{
    try {
        const {id} = req.params;                                                                                                                        
        const Program = await program.findByIdAndDelete(id);
        if(!Program){
            res.send(`No programs with id:${id} found`);
        }
        res.send("Program deleted!");
    } catch (error) {
        res.send(error);
    }
}

const updateFitProgram = async (req,res)=>{
    try {
        const {id} = req.params
        const Program = await program.findByIdAndUpdate({ _id: id }, req.body, { new: true, runValidators: true });
       if(!Program){
        res.send("item not found")
       }
       res.send(Program)
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    createFitProgram, getFitPrograms,deleteFitProgram,updateFitProgram
}