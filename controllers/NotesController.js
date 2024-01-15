const Notes = require("../models/Notes");

class NotesController{
    async addNotes(req, res){
        res.setHeader('Content-Type', 'application/json');

        const {title, body} = req.body;
        const notes = await Notes.create({
            title: title,
            body: body
        })
        res.status(200).json({
            msg: 'Notes Added!'
        })
    }

    async fetchAllNotes(req, res){
        const notes = await Notes.findAll();
        res.status(200).json({
            notes: notes
        })
    }

    async fetchANote(req, res, id){
        const note = await Notes.findByPk(id)

        if (note === null){
            res.status(404).json({msg: 'Note doesnt exists'})
        }
        res.status(200).json({note: note})
    }
}

module.exports = NotesController;