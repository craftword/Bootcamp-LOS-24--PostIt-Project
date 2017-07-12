const addMembersToGroup = require("../models").Members;

module.exports = {
    create(req, res) {
        return addMembersToGroup
            .create({
                groupId: req.param.hidden,
                member: req.body.description,
                
            })
            .then(result => {
                res.status(202).json({message:"You have added a member to a group"});
            });
            
    },
};