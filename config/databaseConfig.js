const mongoose = require('mongoose')

const connect = async () => {
    try{
      const connect = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
      console.log("Mongo URI Connected ==> " + process.env.MONGO_URI);
    }
    catch(e){
      console.log("MongoDB Error ==> " + e);
      process.exit(1);
    } 
}

module.exports = connect;