const {Router}= require('express');
const router=Router();
const{renderNoteForm,
      renderNote,
      createNewNote,
      renderEditNote,
      updateNote,
      deleteNote}=require('../controllers/notes.controllers')

router.get('/notes/add',renderNoteForm)

router.post('/notes/add',createNewNote)

router.get('/notes',renderNote)

router.get('/notes/edit/:id',renderEditNote)

router.put('/notes/edit/:id',updateNote)

router.delete('/notes/delete/:id',deleteNote)

module.exports=router;