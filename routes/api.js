const router = require("express").Router();
const path = require('path');
// const Cardio = require("../models/cardio")
// const Resistance = require("../models/resistance");
const Workout = require("../models/workout.js");

//new workout
router.get("/exercise", (req,res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    } catch (err) {
        res.status(500).json(err)
    }
});

// //continue workout
// router.get("/exercise?", (req,res) => {

// });

router.get("/stats", (req,res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get("/api/workouts", (req,res) => {

});

router.post("/api/workouts", ({ body },res) => {
    Workout.create(body)
    .then(newWorkout => {
        res.json(newWorkout)
    })
    .catch(err => {
        res.status(400).json(err)
    })
});

router.put("/api/workouts/:id", async (req,res) => {
    Workout.findByIdAndUpdate(
    {
        _id: req.params.id
    },
    {
        $push: {
            workouts: req.body
        }
    },
    (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.send(data)
        }

    })

});

router.get("/api/workouts/range", (req,res) => {

    Workout
    // .find({})
    // .sort({'date': -1})
    // .limit(7)
    .aggregate([
    
        {"$addFields": {
            "totalDuration": {
                "$reduce": {
                    "input": "$workouts",
                    "initialValue": 0,
                    "in" : {"$add" : ["$$value", "$$this.duration"]}
                }
            } 
            }
        },
        { "$sort":{'date': -1} },
        { "$limit": 7}
    ])
    .exec(function (err, data) {
        if (err) {
            res.send(err)
        } else {
            res.json(data)
        }
        
    })

    // , (error, data) => {
    //     if (error) {
    //       res.send(error);
    //     } else {
    //       res.json(data);
    //     }
    //   });
    // .sort({'date': -1})
    // .limit(7)
        
    // .catch(err => {
    //     res.status(400).json(err)
    // })
        
       
});

module.exports = router;