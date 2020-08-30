const router = require('express').Router();
const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../model/User');


// GET  /auth/google
// Auth Google  
router.get('/google', passport.authenticate('google',{scope : ['email','profile']}));


// GET  /auth/google/callback
// Google Call back 
router.get(
    '/google/callback',  
    passport.authenticate("google", {
    successRedirect:"/auth/login/success",
    failureRedirect: "/auth/login/failed"
}));

// GET  /auth/google/callback
// Success Google Auth 
router.get('/login/success', (req,res)=>{
    if (req.user) {
        res.json({
            message : "User authenticate",
            user : req.user
        })
    }
});


// GET  /auth/google/callback
// Failed Google Auth 
router.get("/login/failed", (req, res) => {
    res.status(401).json({
      user: null,
      message: "user failed to authenticate."
    });
  });

module.exports = router;