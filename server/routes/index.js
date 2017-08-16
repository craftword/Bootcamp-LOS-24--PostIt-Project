//const createUserController = require("../controllers").user;
const signInController = require("../controllers").userSignIn;
const createGroupController = require("../controllers").group;
const createMembersController = require("../controllers").member;
const createMessageController = require("../controllers").message;

import create from "../controllers/createUser";
//const createUserController = controllers.user;

const appApi = (app) => {
    app.get("/api/", (req, res) => res.status(200).send({
        message: "Welcome to the PostIT API!",
    }));

    app.post("/api/user/signup", create);
    app.post("/api/user/signin", signInController.signIn);
    app.post("/api/group", createGroupController.create);
    app.post("/api/group/:groupId/user", createMembersController.create);
    app.post("/api/group/:groupId/message", createMessageController.create);
    app.get("/api/group/:groupId/message", createMessageController.list);

};

export default appApi;