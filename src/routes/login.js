var express = require('express');

var router = express.Router();


router.get('/', async (req, res) => {
    // const email = "g@g.g";
    // const userName = "g";
    // const room = "Sport"
    // if(userName === req.query.userName && email === req.query.email && room === req.query.room)
    //     {
    //         res.json({sucsses:true})
    //     }
    //     else{
    //         res.json({sucsses:false})
    //     }
    res.json({sucsses:true})
});

module.exports = router;