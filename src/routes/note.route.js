const router = require('express').Router();
const notesController = require('../controllers/NotesController');

//Notes API
router.post(`/add-notes`, notesController.addNotes);
router.get(`/all-notes`, notesController.fetchAllNotes);
router.get(`/note/:id`, notesController.fetchANote);
router.delete(`/delete-note/:id`, notesController.deleteNote);
router.patch(`/edit-title/:id`, notesController.updateTitleOfNote);

module.exports = router;