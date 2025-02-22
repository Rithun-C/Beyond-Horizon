const UserModel = require('../models/UserModel');

const signUpHandler = async function(req,res){
    try{
        const userObject = req.body;
        // 1. user -> data get , check email , password
        if (!userObject.email || !userObject.password) {
            return res.status(400).json({
                "message": "required data missing",
                status: "failure"
            })
        }
        console.log("here");
        // 2. email se check -> if exist -> already loggedIn 
        const user = await UserModel.findOne({ email: userObject.email });
        if (user) {
            return res.status(400).json({
                "message": "user is already logged in",
                status: "failure"
            })
        }
        const newUser = await UserModel.create(userObject);
        // send a response 
        res.status(201).json({
            "message": "user signup successfully",
            user: newUser,
            status: "success"
        })

    }catch(err){
        res.status(404).json({
            message : "internal server error",
            error : err
        })
    }
}

const loginHandler = async function(req,res){
    try{
        const {email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(404).json({
                message : "invalid email or password",
                status : "failure"
            })
        }
        const areEqual = password == user.password;
        if(!areEqual){
            return res.status(400).json({
                message :" invalid email or password",
                status : "failure"
            })
        }
        // res send 
        res.status(200).json({
            message: "login successfully",
            status: "success",
            user: user
        })
    }catch(err){
        res.status(404).json({
            message : "internal server error",
            error : err
        })
    }
}

module.exports = {
    signUpHandler,
    loginHandler
}