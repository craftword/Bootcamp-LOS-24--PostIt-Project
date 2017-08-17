
import create from "../controllers/createUser";
import signIn from "../controllers/signIn";
import jwtAuth from "../controllers/jwtAuth";
import createGroups from "../controllers/createGroup"; 
import addMembers from "../controllers/members";
import getMessages from "../controllers/messages";

const appApi = (app) => {
    app.get("/api/", (req, res) => res.status(200).send({
        message: "Welcome to the PostIT API!",
    }));

    app.post("/api/user/signup", create);
    app.post("/api/user/signin", signIn);
    app.post("/api/group", jwtAuth,createGroups);
    app.post("/api/group/:groupId/user", jwtAuth, addMembers);
    app.post("/api/group/:groupId/message", jwtAuth, getMessages.create);
    app.get("/api/group/:groupId/message", jwtAuth, getMessages.list);

};

export default appApi;