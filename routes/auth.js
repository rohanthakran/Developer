var express = require('express')
const {signout,signup} = require("../controllers/auth");
const { check, validationResult } = require('express-validator');
var router = express.Router();

router.get("/sin", signout)
router.post("/signup",[
    check("name", "name sholud be at least 3 char").isLength({min:3}),
    check("email", "Email is required").isEmail(),
    check("password", "password sholud be at least 3 char").isLength({min:3}),
],
    signup);
const singout = (req,res) =>{
    res.json({
        message : "i love my life"
    })
}
router.get("/sin",singout);

module.exports = router;