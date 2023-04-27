const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        length: { type: Number, required: true }
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("Exercise",exerciseSchema);