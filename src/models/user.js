const mongoose= require('mongoose');
const bcrypt= require('bcrypt');
const User= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String, 
        required:true,
        unique:true
    },
    password:{
            type:String,
            required:true
        }
},{timetamps:true,
versionKey:false});

User.methods.encryptpassword=async password=>{
 const salt =await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

User.methods.checkpassword= async password=> {
    const isMatch=await bcrypt.compare(password,this.password);
    return isMatch;
};

module.exports=mongoose.model('User',User);

