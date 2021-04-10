const express = require('express')
const router = express.Router();
const {notes} = require('../../db/db.json');

router.get('/notes',(req, res) => {
    if(req.query) {
   res.json(notes);
    }
});

module.exports = router;
