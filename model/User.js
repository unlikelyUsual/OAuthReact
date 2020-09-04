const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id : {
        type: String,
        required : true
    },
    name: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    email: {
        type: String,
    },
    age: {
        type: String,
    },
    mobile: {
        type: String,
    },
    address: {
        type: String,
    },
    createdOn: {
        type: Date,
       default : Date.now()
    },
});

module.exports = User = mongoose.model('User',UserSchema);