const router = require('express').Router();
const User = require('../model/User');
const passport = require('passport');
const editUserValidator = require('../utils/validator/editUserValidator')

// POST  /api/user/update
// Updated User 
router.post('/update', (req,res)=>{
    const {isvalid,errors} = editUserValidator(req.body);
     if(!isvalid){
        return res.status(400).json(errors);
     }

     const user = {};
     user.age = req.body.age;
     user.address = req.body.address;   
     user.mobile = req.body.mobile;

     User
     .findOneAndUpdate(
        { id : req.user.id },
        { $set: user },
        { new: true }
      )
     .then(result=>{
         if(!result){
             errors.user = 'User not Found';
            return res.status(404).json(errors)
         }
            res.json(result);
     })
     .catch(err=>{
         errors.user = err.message
         res.status(404).json(errors);
     })
});



module.exports = router;