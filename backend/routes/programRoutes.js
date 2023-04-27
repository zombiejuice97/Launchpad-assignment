const express = require("express");
const program = require("../models/fitnessProgramSchema")

//route countroller imports
const { createFitProgram, getFitPrograms, deleteFitProgram, updateFitProgram } = require("../controllers/fitnessController");

const router = express.Router();

//Routes 
router.post("/api/programs",createFitProgram)

router.get("/api/programs",getFitPrograms)

router.patch("/api/programs/:id",updateFitProgram)

router.delete("/api/programs/:id",deleteFitProgram)

module.exports = router; 