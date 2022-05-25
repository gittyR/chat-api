var express = require('express');
const json = require('../../file.json');

var router = express.Router();


router.get('/', async (req, res) => {
    let findRoomsByUserId = json.rooms.filter((room)=>room.users.includes(Number(req.query.userId)))
    res.send({data: findRoomsByUserId})
});

module.exports = router;