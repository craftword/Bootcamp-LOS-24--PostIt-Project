const addMembersToGroup = require("../models").Members;

module.exports = {
    create(req, res) {
        return addMembersToGroup
            .create({
                groupId: req.params.groupId,
                member: req.body.user,
                
            })
            .then(addMembersToGroup => res.status(201).send(addMembersToGroup))
            .catch(error => res.status(400).send(error));
            
    },
};