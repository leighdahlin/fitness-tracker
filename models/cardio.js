var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
    type: {
        type: String,
        required: "Please select a workout type."
    },
    name: {
        type: String,
        trim: true,
        required: "Please enter the name of your workout."
    },
    distance: {
        type: Number,
        trim: true,
        required: "Please enter the distance."
    },
    duration: {
        type: Number,
        trim: true,
        required: "Please enter the duration."
    }
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;