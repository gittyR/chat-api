var express = require('express');
const json = require('../../file.json');
var router = express.Router();


router.get('/', async (req, res) => {
    let findUser = json.users.find((user)=>user.name === req.query.userName && user.email === req.query.email )
    if(findUser)
        {
            res.json({sucsses:true, data: findUser})
        }
        else{
            res.json({sucsses:false})
        }
});

module.exports = router;