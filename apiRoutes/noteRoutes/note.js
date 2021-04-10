const express = require('express');
const router = express.Router();
const {notes} = require('../../db/db.json');
const uuid = require('uuid')
const fs = require('fs');
const path = require('path')

router.get('/notes',(req, res) => {
    if(req.query) {
   res.json(notes);
    }
});

router.post("/notes", (req,res)=> {
   const newNote = {
    id: uuid.v4(),
    title: req.body.title,
    text: req.body.text
   }
   if(!newNote.title || !newNote.text) {
       return res.status(400).json('please format correctly');
   }
   notes.push(newNote);
   fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({notes})
   );
   res.json(newNote)
       
});







module.exports = router;
