userCtrl={};


userCtrl.renderSignUpForm=(req,res)=>{
    res.render('user/signup')
}

userCtrl.signup=(req,res)=>{
    res.send('signup')
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