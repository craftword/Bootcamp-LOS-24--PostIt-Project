const getPostMessage = require('../models').Messages;
module.exports = {
    create(req, res) {
        return getPostMessage
            .create({
                groupId: req.params.groupId,
                message: req.body.message,
               
            })
            .then(getPostMessage => res.status(201).send(getPostMessage))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return getPostMessage
            .findAll({
                where: {
                    groupId: req.params.groupId,
                }
            })
            .then(getPostMessage => res.status(200).send(getPostMessage))
            .catch(error => res.status(400).send(error));
    },
};