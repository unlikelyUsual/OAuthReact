const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name : {
        type : 'string',
        required : true
    },
    description : {
        type : 'string',
        required : true
    },
    image : {
        type : 'string',
    },
    available : {
        type : 'boolean',
    },
    createdOn: {
        type: Date,
       default : Date.now()
    },
});

module.exports = User = mongoose.model('User',UserSchema);