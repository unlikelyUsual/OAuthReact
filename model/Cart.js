const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    user : {
        type: Schema.Types.ObjectId,
        ref : "user"
    },
    items : [
        {
            item : {
                type : Schema.Types.ObjectId,
                ref:"item"
            },
            quantity : {
                type : 'number',
                required : true
            }
 
        }
    ],
    createdOn: {
        type: Date,
       default : Date.now()
    },
});

module.exports = User = mongoose.model('User',UserSchema);