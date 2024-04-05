const Note= require('../models/note')
const noteCtrl={}


noteCtrl.renderNoteForm=(req,res)=>{
    res.render('notes/new-notes');
}

noteCtrl.createNewNote=async(req,res)=>{
    const {title, description}= req.body;
    const newnote= new Note({title, description})
   await newnote.save()
   console.log(newnote);
    res.redirect('/notes');
}

noteCtrl.renderNote = async(req,res)=>{
    const notas=await Note.find().lean()

    res.render('notes/all-notes',{notas})
}


noteCtrl.renderEditNote = (req,res)=>{
    res.send('render edit form')
}

noteCtrl.updateNote = (req,res)=>{
    res.send('update note')
}

noteCtrl.deleteNote =async (req,res)=>{
  await  Note.findByIdAndDelete(req.params.id)
  res.redirect('/notes')
}


module.exports=noteCtrl;    