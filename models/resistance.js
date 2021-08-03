var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
    type: {
        type: String,
        required: "Please select a workout type."
    },
    name: {
        type: String,
        trim: true,
        required: "Please enter the name of your workout."
    },
    weight: {
        type: Number,
        trim: true,
        required: "Pleas enter the weight."
    },
    sets: {
        type: Number,
        trim: true,
        required: "Please enter the number of sets"
    },
    reps: {
        type: Number,
        trim: true,
        required: "Please enter the number of reps for each set"
    },
    duration: {
        type: Number,
        trim: true,
        required: "Please enter the duration of your activity"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;