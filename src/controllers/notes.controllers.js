const noteCtrl={}

noteCtrl.renderNoteForm=(req,res)=>{
    res.send('note form');
}

noteCtrl.createNewNote=(req,res)=>{
    res.send('new note')
}

noteCtrl.renderNote = (req,res)=>{
    res.send('full add notes')
}


noteCtrl.renderEditNote = (req,res)=>{
    res.send('render edit form')
}

noteCtrl.updateNote = (req,res)=>{
    res.send('update note')
}

noteCtrl.deleteNote = (req,res)=>{
    res.send('delete note')
}
module.exports=noteCtrl;    