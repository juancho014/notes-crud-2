const {Router}= require('express');
const router=Router();
const{renderNoteForm,
      renderNote,
      createNewNote,
      renderEditNote,
      updateNote,
      deleteNote}=require('../controllers/notes.controllers')

      //new notes
router.get('/notes/add',renderNoteForm)

router.post('/notes/new-note',createNewNote)

//get all notas todas las notas
router.get('/notes',renderNote)

//edit notes// formulario para poder editar las notas
router.get('/notes/edit/:id',renderEditNote)

// actualizar los datos
router.put('/notes/edit/:id',updateNote)


// formulario para eleminar los datos
router.delete('/notes/delete/:id',deleteNote)



module.exports=router;