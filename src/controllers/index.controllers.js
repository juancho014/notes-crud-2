const indexCtrl={}

indexCtrl.index=(req,res)=>{
    res.render('index')
}

indexCtrl.about=(req,res)=>{
    res.render('about')
}

module.exports=indexCtrl;