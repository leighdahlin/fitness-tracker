var mongoose = require("mongoose");
const Cardio = require("./cardio")
const Resistance = require("./resistance");

const Schema = mongoose.Schema;

const exerciesSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    workouts: {
        type: Array,
    }
    // cardioExercises: [{ type: Schema.Types.ObjectId, ref:'Cardio' }],
    // resistanceExercises: [{ type: Schema.Types.ObjectId, ref:'Resistance' }]
})



const Exercises = mongoose.model("Exercises", exerciesSchema);

module.exports = Exercises;