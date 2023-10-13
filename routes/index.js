var express = require('express');
var router = express.Router();
let Place = require('../models/places');


router.post('/places', function(req, res) {

    let newPlace = new Place({
        nickname: req.body.nickname,
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    });

    newPlace.save().then(() => res.json({ result: true }))

});



router.get('/places/:nickname', (req, res) => {

    Place.find({ nickname: req.params.nickname }).then(data => {
      res.json({ result: true, places: data });
    });

});


router.delete('/places', (req, res) => {

    Place.deleteOne({ nickname: req.body.nickname, name: req.body.name }).then(data => {
        res.json({ result: true });
    });

});




module.exports = router;
