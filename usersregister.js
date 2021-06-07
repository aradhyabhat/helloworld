const userDB = require('../model/usersregister');

const userregister = {}

//login a user
userregister.register = (name, emailId, contactNo, userPassword) => {
    return userDB.checkUser(contactNo).then((user) => {
        if (user != null) {
            let err = new Error("The user is already a registered user! Please login to continue")
            err.status = 406
            throw err
        }
        else {
            return userDB.registerToDb(name,emailId,contactNo,userPassword).then((data) => {
                if (data != null){return data;}
                else{
                    let err = new Error("Registration failed! Please try again")
                    err.status = 406
                    throw err
                }
            })
        }
    })
}

module.exports = userregister
