const createUser = require('../models').Users;

module.exports = {
    return signIn
    signIn(req, res) {
        .findOne({
            where: {
                username:req.body.username,
                password:req.body.password
                 }
            });
        .then(result => {
            console.log(result.count);
            console.log(result.rows);
        });
       }

};