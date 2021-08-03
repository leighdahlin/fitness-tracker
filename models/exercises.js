var mongoose = require("mongoose");
const Cardio = require("../models/cardio")
const Resistance = require("../models/resistance");

const Schema = mongoose.Schema;

const exerciesSchema = new Schema({
    cardioExercises: [{ type: Schema.Types.ObjectId, ref:'Cardio' }],
    resistanceExercises: [{ type: Schema.Types.ObjectId, ref:'Resistance' }]
})



const Exercises = mongoose.model("Exercises", exerciesSchema);

module.exports = Exercises;