const router = require("express").Router();
const path = require('path');
// const Cardio = require("../models/cardio")
// const Resistance = require("../models/resistance");
const Exercises = require("../models/exercises");

//new workout
router.get("/exercise", (req,res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    } catch (err) {
        res.status(500).json(err)
    }
});

//continue workout
router.get("/exercise?", (req,res) => {

});

router.get("/stats", (req,res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get("/api/workouts", (req,res) => {

});

// router.post("/api/workouts", (req,res) => {

// });

// router.put("/api/workouts", (req,res) => {

// });

router.get("/api/workouts/range", (req,res) => {
    Cardio.find({})
});

module.exports = router;