const GoogleStratergy = require('passport-google-oauth20').Strategy;
const User = require('../model/User');


const initialize = (passport) => {
    passport.use(
        new GoogleStratergy(
            {
                clientID:     process.env.GOOGLE_AUTH_CLIENT_ID,
                clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
                callbackURL: "http://localhost:3000/auth/google/callback",
                passReqToCallback   : true
           },
           async (request, accessToken, refreshToken, profile, done)=>{
            //console.log(profile);

            const userStored = await User.findOne({
                id : profile.id
            });

            if(!userStored){
              //Create New User 
               const newUser = new User({
                   id : profile.id,
                   name : profile.displayName,
                   firstName : profile.name.familyName,
                   lastName : profile.name.givenName,
                   image : profile.photos[0].value,
               });

              const saveUser = await newUser.save();
              if (saveUser) {
                done(null, saveUser);
              }
              else {
                  done(new Error("Error in saving New user"));
              }

            }
            else done(null,userStored);
           }
        )
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
      
    passport.deserializeUser(async (id, done) => {
        try{
            const user = await User.findOne({id : id});
            if(user) done(null,user);
            else done(new Error("Failed to deserialize an user"))
        }
        catch(e){
            done(e)
        }
      
    });
}

module.exports = initialize;