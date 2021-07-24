const path = require("path");
const router = require("express").Router();
// const notes = require("../public/assets/js/index");

// const notes = require("../public/assets/js/index");
//make get to notes to make new note and delete olds
router.get(`/api/notes`, function (req, res) {
    notes.getNotes()
    .then(notes => res.parse.json(notes))
    .catch(err => res.status(500).parse.json(err));
})
router.post(`/api/notes`, function (req, res) {
    notes.saveNote(req.body)
    .then(notes => res.parse.json(notes))
    .catch(err => res.status(500).parse.json(err));
})


router.delete(`/api/notes`, function (req, res) {
    notes.deleteNote(req.params.id)
    .then(() => res.parse.json({ok: true}))
    .catch(err => res.status(500).parse.json(err));
})

module.exports = router;