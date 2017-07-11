const createUser = require('../models').Users;
const bcrypt = require("bcrypt");
module.exports = {
    signIn(req, res) {

        return createUser
            .findOne({
                where: {
                    username:req.body.username,                   
                }
            })
            .then(result => {
                if(result === null) {
                    res.status(403).json({ error: "No record exits" });
                }
                //to compare password that user supplies in the future
                let hash = result.password;
                bcrypt.compare(req.body.password, hash, (err, doesMatch)=>{
                    if (doesMatch){
                    //log him in
                        res.status(202).json({pass: "Authentication successful..." });
                    }else{
                    //go away
                        res.status(403).json({ error: "Inavlid username or password" });
                    }
                });
            });
    },

};