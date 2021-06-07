const userDetails = require('./beanClasses/users');
const connection = require("../utilities/connections")

const usersDB = {}

usersDB.checkUser = (contactNo) => {
    return connection.getUserCollection().then((collection) => {
        return collection.findOne({ "contactNo": contactNo }).then((customerContact) => {
            if (customerContact) {
                return new userDetails(customerContact);
            }
            else return null;
        })
    })
}

usersDB.getPassword = (contactNo) => {
    return connection.getUserCollection().then((collection) => {
        return collection.find({ "contactNo": contactNo }, { _id: 0, password: 1 }).then((password) => {
            if (password.length != 0)
                return password[0].password;
            else
                return null;
        })
    })
}

usersDB.getBooks = (userId) => {
    return connection.getBookingCollection().then((collection)=>{
        return collection.find({"userId":userId}).then((books)=>{
            if(books){
                console.log(books);
                
                return books;
            }
            else{
                return null;
            }
        })
    })
}



module.exports = usersDB;
