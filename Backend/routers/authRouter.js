const express = require('express');
const authRouter = express.Router();
const { loginHandler, signUpHandler } = require("../contollers/authController");
authRouter.post('/login', loginHandler)
          .post('/signup', signUpHandler)

module.exports = authRouter;