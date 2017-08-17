import models from "../models";
const createGroup = models.Groups;
const createMember = models.Members;
const findUser = models.Users;

const createGroups = (req, res)=> {
   
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
        })
        .catch(error => res.status(400).send(error)); 
            
   
};

export default createGroups; 