var express = require('express');

var router = express.Router();


router.get('/', async (req, res) => {
    res.send({
        data: [
            {id:null,name:'Select an option'},
            {id:'1',name:'room1'},
            {id:'2',name:'room2'},
            {id:'3',name:'room3'},
    ]
    })
});

module.exports = router;