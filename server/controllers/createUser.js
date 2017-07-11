const createUser = require('../models').Users;

module.exports = {
  create(req, res) {
    return createUser
      .create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        fullname: req.body.fullname,
        phone: req.body.phone,
        picture: "img/default.jpg",
      })
      .then(createUser => res.status(201).send(createUser))
      .catch(error => res.status(400).send(error));
  },
};