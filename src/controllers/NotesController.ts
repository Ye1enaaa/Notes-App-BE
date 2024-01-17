import { Request, Response } from 'express';
import Notes from '@models/Notes';

export default {
    addNotes: async (req: Request, res: Response) => {

        const {title, body} = req.body;

        const notes = await Notes.create({
            title: title,
            body: body
        })
        res.status(200).json({
            msg: 'Notes Added!'
        })
    },

    fetchAllNotes: async (req: Request, res: Response) => {

        const notes = await Notes.findAll();
        res.status(200).json({
            notes: notes
        })

    },

    fetchANote: async (req: Request, res: Response, id: any) => {

        const note = await Notes.findByPk(id)

        if (note === null){
            res.status(404).json({msg: 'Note doesnt exists'})
        }
        res.status(200).json({note: note})
    },

    deleteNote: async (req: Request, res: Response, id: any) => {
        const note = await Notes.destroy({
            where:{
                id: id
            }
        })
        res.status(200).json({
            'msg': 'Deleted'
        });
    },

    updateTitleOfNote: async (req: Request, res: Response, id: any) => {
        const {title} = req.body;
        const newTitle = await Notes.update({title:title}, {
            where:{
                id: id
            }
        })

        res.status(200).json({
            msg: 'Success',
            newTitle: title
        });
    }
}