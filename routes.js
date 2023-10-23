const express = require('express');

const router = express.Router()

module.exports = router;

const Model = require('../model/model');

//Post Contestant Method
router.post('/contestants', async (req, res) => {
    const data = new Model({
        contestantName: req.body.contestantName,
        husbandName: req.body.husbandName,
        vocalRange: req.body.vocalRange,
        location: req.body.location
    })
    try{
        const savingData = await data.save()
        res.status(200).json(savingData)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Get all Contestants Method
router.get('/contestants', async (_, res) => {
    try{
        const data = await Model.find()
        const response = {
            pairs: data.map(({ contestantName, husbandName }) => ({
              contestantName,
              husbandName,
            })),
          };
        res.json(response)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get HusbandCall by ContestantName Method
router.get('/husbandCall/:contestantName', async (req, res) => {
    try {
        const contestant  = req.params.contestantName;
        const data = await Model.findOne({"contestantName": contestant})
        if (!data) {
            throw new Error("No contestant with that name was found")
        }
        else if (data.vocalRange == data.location) {
            const husbandCall = data.location
            const response = { "score": husbandCall };
            res.json(response)
        } else if (data.vocalRange > data.location) {
            const husbandCall = Math.abs(data.location - data.vocalRange);
            const response = { "score": husbandCall };
            res.json(response);
        } else {
            throw new Error("Vocal range is less than husband's location");
        }
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})