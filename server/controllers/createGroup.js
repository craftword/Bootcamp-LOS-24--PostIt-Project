const createGroup = require("../models").Groups;
const createMember = require("../models").Members;
const findUser = require("../models").Users;

module.exports = {
    create(req, res) {
        return createGroup
            .create({
                name: req.body.name,
                userId: req.body.hidden,
                description: req.body.description,
                
            })
            .then(result => {
                findUser.findOne({
                    where: {
                        id:req.body.hidden,                   
                    }
                })
                    .then(user => {
                        createMember.create({
                            groupId:result.id,
                            member:user.fullname,
                        });
                    });
                res.status(202).json({group: "Created successful..." });
            });
            
    },
};