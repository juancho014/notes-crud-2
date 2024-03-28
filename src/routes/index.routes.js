const{Router}=require('express')
const router = Router();
const{index,about}=require('../controllers/index.controllers')


router.get('/',index)

router.get('/about',about)


module.exports=router;