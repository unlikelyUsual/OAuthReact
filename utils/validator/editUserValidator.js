const Validator = require('validator');
const isEmpty = require('../isEmpty');

const editUserValidator = (requestObject) => {

    let errors = {};

    const name = isEmpty(requestObject.name) ? '' : requestObject.name;
    const email = isEmpty(requestObject.email) ? '' : requestObject.email;
    const age = isEmpty(requestObject.age) ? '' : requestObject.age;
    const mobile = isEmpty(requestObject.mobile) ? '' : requestObject.mobile;
    const address = isEmpty(requestObject.address) ? '' : requestObject.address;


    console.log(name,email,age,mobile)

    if(Validator.isEmpty(name)){
        errors.name = "Name is Required"
    }

    // if(Validator.isLength(name,{min : 5 , max : 20})){
    //     errors.name = "Name should be between 5 to 20"
    // }

    if(Validator.isEmpty(email)){
        errors.email = "Email is Required"
    }

    if(!Validator.isEmpty(email) && !Validator.isEmail(email)){
        errors.email = "Email is not valid"
    }


    if(!Validator.isEmpty(age) && !Validator.isNumeric(age)){
        errors.age = "Age is not valid"
    }

    if(!Validator.isEmpty(mobile) && !Validator.isMobilePhone(mobile,['en-IN'])){
        errors.mobile = "Mobile is not valid"
    }

    return {
        isvalid : isEmpty(errors),
        errors 
    }

}

module.exports = editUserValidator;