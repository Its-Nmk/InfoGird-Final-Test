const path = require("path");

const adminSchema = require('../model/signup');



const { validationResult } = require('express-validator');


//===========================ADMIN SECTION===========================



//-----Display all the users
exports.getUsers = async (req, res) => {
    if (!req.session.loggedIN) {
        return res.send({ statusCode: 401, message: "Unauthorised" })
    }
    // res.send('Hello')
    try {
        const users = await adminSchema.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
}




var userfound;

exports.checkLogin = async (req, res) => {

    const user = req.body.username;
    const pass = req.body.password;
    console.log(user, pass);
    userFound = await adminSchema.findOne({ email: user })
    if (userFound) {
        console.log("This is username", userFound.email);
        if (userFound.email === user) {
            // console.log("username matched");
            if (userFound.password === pass) {
                // console.log("password matched");
                req.session.loggedIN = true;
                console.log("Logged in successfully");
                console.log(userFound);
                return res.status(200).send(userFound);
                // return res.send(userFound)
                // res.redirect('/profile');
            }
            else {
                return res.send("incorrect password")
            }
        }
    }
    res.send("User Not found")
};

exports.profile = async (req, res) => {
    // if (!req.session.loggedIN || userfound) {
    //     return res.json({ statusCode: 401, message: "Unauthorised" })
    // }
    try {
        const user = await adminSchema.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.json({ message: error });
    }
}

exports.logout = (req, res) => {
    req.session.destroy();
    res.send({ statusCode: 200, message: "Logged Out" });
}




//-------Adding user to database

exports.addUser = async (req, res) => {

    //----validating input fileds 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    //----adding user Data to Database
    const user = new adminSchema({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
    });
    try {
        const savedUser = await user.save()
        res.json(savedUser);
        console.log(savedUser);
    } catch (error) {
        res.json({ message: error });
        console.log({ message: error });
    }
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log("Thank you " + req.body.firstName + " for registering");
}







// ======================================================================
// ------upadting post route

exports.updateUser = async (req, res) => {




    console.log(req.params.id)
    // id=`ObjectId(${req.params.id})`
    try {
        const updatedUser = await adminSchema.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        )
        res.json(updatedUser);
        console.log("This is new =====", updatedUser);
    } catch (error) {
        res.json({ message: error });
        console.log({ message: error });
    }

    // console.log(req.body.id);
    // console.log(updatedUser._id);

}
































/*



//==========================Record Section========================


//-----Display home Route
exports.recordInfo = (req, res) => {
    if (!req.session.loggedIN) {
        return res.send({statusCode:401, message:"Unauthorised"})
    }
    res.send("Now you can perform CRUD");
}


//-----Display all the records
exports.readRecords = async (req, res) => {
    if (!req.session.loggedIN) {
        return res.send("Unauthorised Access")
    }
    // res.send('Hello')
    try {
        const users = await recordSchema.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
}

//-----Display the Record with specific id
exports.readRecordWithId = async (req, res) => {
    if (!req.session.loggedIN) {
        return res.send("Unauthorised Access")
    }
    try {
        const user = await recordSchema.findById(req.params.Id);
        res.json(user);
    } catch (error) {
        res.json({ message: error });
    }
}


//-----delete the record with specific id
exports.deleteRecordWithId = async (req, res) => {
    if (!req.session.loggedIN) {
        return res.send("Unauthorised Access")
    }
    try {
        const removedRecord = await recordSchema.deleteOne({ _id: req.params.Id });
        res.json(removedRecord);
    } catch (err) {
        res.json({ message: err });
    }
};


//-----updating the record with specific id
exports.updateRecordWithId = async (req, res) => {
    if (!req.session.loggedIN) {
        return res.send("Unauthorised Access")
    }
    try {
        const updatedRecord = await recordSchema.updateOne(
            { _id: req.params.Id },
            { $set: { firstName: req.body.firstName } });
        res.json(updatedRecord);
    } catch (err) {
        res.json({ message: err });
    }
}


//-------Adding user to database

exports.addRecord = async (req, res) => {
    if (!req.session.loggedIN) {
        return res.send("Unauthorised Access")
    }
    // console.log("data is coming");

    //----validating input fileds
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    //----adding user Data to Database
    const user = new recordSchema({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone
    });
    try {
        const savedRecord = await user.save()
        res.json(savedRecord);
        console.log(savedRecord);
    } catch (error) {
        res.json({ message: error });
        console.log({ message: error });
    }
    // console.log(req.body.firstName);
    // console.log(req.body.lastName);
    console.log("Thank you " + req.body.firstName + " for registering");
}
*/