const express = require('express');
const router = express.Router();
const setupUser = require("../model/setupUser")
const userservice = require('../service/userslogin')
const userregister = require('../service/usersregister')
router.get("/setup", (req, res, next) => {
    setupUser.userSetup().then((data) => {
        res.send(data)
    }).catch(err => next(err));
})

//router to login
router.post('/login', function (req, res, next) {    
    let contactNo = req.body.contactNo;
    let password = req.body.password;
    userservice.login(parseInt(contactNo), password).then(function (userDetails) {
        res.json(userDetails);
    }).catch((err) =>
       { console.log(err);
        next(err)})
})
//router to register
router.post('/register',function (req,res, next) {    
    let name = req.body.name;
    let emailId = req.body.emailid;
    let contactNo = req.body.contactNo;
    let password = req.body.password;
    userregister.register(name, emailId, contactNo, password).then(function (data){
        res.json(data);
    } ).catch(err => {next(err)});
})
router.get('/getBookings/:userId',function(req,res,next){
    let userId=req.params.userId;
    userservice.getBookings(userId).then((bookings)=>{
        res.json(bookings);
    }).catch(err => next(err))
})
module.exports = router;

