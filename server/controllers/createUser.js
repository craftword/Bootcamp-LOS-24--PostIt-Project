//const createUser = require("../models").Users;
import Users from "../models";
const create = () => {
    const mon =  "check the function";
    return mon;
};
/*const create = (req, res) => {
       
    return Users
        .create({
            email: req.body.emai
            username: req.body.username,
            password: req.body.password,
            fullname: req.body.fullname,
            phone: req.body.phone,
            picture: "img/default.jpg",
        })
        .then(users => res.status(201).json({
            "fullname":users.fullname,
            "email":users.email,
            "Id":users.id,
            "username":users.username
        }))
        .catch(error => res.status(400).send(error)); 
};*/

export default create;