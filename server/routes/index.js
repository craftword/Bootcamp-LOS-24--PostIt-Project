const createUserController = require('../controllers').user;
const signInController = require('../controllers').userSignIn;
const createGroupController = require('../controllers').group;
const createMembersController = require('../controllers').member;

module.exports = (app) => {
  app.get('/api/*', (req, res) => res.status(200).send({
    message: 'Welcome to the PostIT API!',
  }));

  app.post('/api/user/signup', createUserController.create);
  app.post('/api/user/signin', signInController.signIn);
  app.post('/api/group', createGroupController.create);
  app.post('/api/group/:groupId/user', createMembersController.create);
};