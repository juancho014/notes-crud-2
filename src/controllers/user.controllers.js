userCtrl={};


userCtrl.renderSignUpForm=(req,res)=>{
    res.render('user/signup')
}

userCtrl.signup=(req,res)=>{
    console.log(req.body);
    res.send('recibido')
}

userCtrl.renderSigninForm=(req,res)=>{
    res.render('user/signin')
}

userCtrl.signin=(req,res)=>{
    res.send('signin')
}

userCtrl.logout=(req,res)=>{
    res.send('logout')
}


module.exports=userCtrl;