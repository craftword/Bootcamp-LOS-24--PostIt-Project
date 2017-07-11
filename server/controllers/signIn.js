const createUser = require('../models').Users;

module.exports = {
    signIn(req, res) {

        return createUser
            .findOne({
                where: {
                    username:req.body.username,
                    password:req.body.password,
                }
            })
            .then(result => {
                if (result == null) {
                    return done(null, false, { message: 'Incorrect credentials.' })
                }
                       
                if (user.password === password) {
                    return done(null, user)
                }
                            
                return done(null, false, { message: 'Incorrect credentials.' })
            });
    },

};