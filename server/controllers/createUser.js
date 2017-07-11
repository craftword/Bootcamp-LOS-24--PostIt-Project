const createUser = require("../models").Users;
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
    create(req, res) {
        const bcryptedPassword = bcrypt.hashSync(req.body.password, saltRounds);
        return createUser
            .create({
                email: req.body.email,
                username: req.body.username,
                password: bcryptedPassword,
                fullname: req.body.fullname,
                phone: req.body.phone,
                picture: "img/default.jpg",
            })
            .then(createUser => res.status(201).send(createUser))
            .catch(error => res.status(400).send(error));
    },
};