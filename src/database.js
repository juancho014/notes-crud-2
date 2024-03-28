const mongoose=require('mongoose');
const MONGO_URI=process.env.MONGO_URI

mongoose.connect(MONGO_URI,{
    
    
}).then(()=>{console.log('conectado a la base datos');})
  .catch((err)=>{console.log(err+ 'error en la coneccion a la base de datos');});