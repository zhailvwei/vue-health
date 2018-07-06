const Router = require('koa-router');
const User = require('../app/controllers/user');

module.exports = function () {
  let router = new Router({
      prefix: '/api'
  });

  router.get('/user/users', User.users);
  router.get('/user/user', User.user);
  router.post('/user/add', User.addUser);
  router.post('/user/delete', User.deleteUser);
  return router;
};