const express = require('express');
const User = require('../models/Users');
const UserController = require('../controllers/UserController');
const NotesController = require('../controllers/NotesController');
const app =  express();

const userController = new UserController();
const notesController = new NotesController();
app.use(express.json());

//Users API
app.post(`/add-user`, (req,res) => userController.addUser(req, res));
app.get(`/users`, (req,res)=> userController.fetchUsers(req, res));
//Notes API
app.post(`/add-notes`, (req, res) => notesController.addNotes(req, res));
app.get(`/all-notes`,(req, res) => notesController.fetchAllNotes(req, res));
app.get(`/note/:id`, (req, res) => notesController.fetchANote(req, res, req.params.id));

const port = 5000
app.listen(port, ()=>{
    console.log(`Server Running on port ${port}`)
})