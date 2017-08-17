import models from "../models";
const addMembersToGroup = models.Members;


const addMembers =  (req, res) => {
    return addMembersToGroup
        .create({
            groupId: req.params.groupId,
            member: req.body.user,
                
        })
        .then(addMembersToGroup => res.status(201).json({
            message:addMembersToGroup.member + " has been added to a group",
        }))
        .catch(error => res.status(400).send(error));
            
    
};

export default addMembers; 