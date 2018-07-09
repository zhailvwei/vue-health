const Router = require('koa-router');
const User = require('../app/controllers/user');

module.exports = function () {
  let router = new Router({
      prefix: '/api'
  });

  router.post('/user/users', User.users);
  router.post('/user/user', User.user);
  router.post('/user/add', User.addUser);
  router.post('/user/delete', User.deleteUser);
  return router;
};