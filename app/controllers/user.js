'use strict'

let xss = require('xss');
let mongoose = require('mongoose');
let User = mongoose.model('User');
let uuid = require('uuid');
const isEmpty = require('loadsh/isEmpty')
const userHelper = require('../dbhelper/userHelper');

/* 多用户 */
exports.users = async (ctx, next) => {
  let data;
  if (isEmpty(ctx.request.body)) {
    data = await userHelper.findAllUsers()
  } else {
    data = await userHelper.findFilterUsers(ctx.request.body)
  }

  ctx.body = {
    success: true,
    data
  }
};

/* 单用户 */
exports.user = async (ctx, next) => {
  let data = await userHelper.findUser(ctx.request.body);
console.log(ctx.request.body)
  ctx.body = {
    success: true,
    data
  }
};

/* 添加(更新)用户 */
exports.addUser = async (ctx, next) => {
  let newObj = ctx.request.body,
      user2;
  let id = newObj.id || uuid.v4();
  let user = new User({
    username: newObj.username,
    gender: newObj.gender,
    rank: newObj.rank,
    age: newObj.age,
    birthdate: newObj.birthdate,
    email: newObj.email,
    mobile: newObj.mobile,
    address: newObj.address,
    memo: newObj.memo,
    id: id
  });
  if (newObj.id) {
    user2 = await userHelper.updateUser(user);
  } else {
    user2 = await userHelper.addUser(user);
  }

  if (user2) {
    ctx.body = {
      success: true,
      data: user2
    }
  }
};

/* 删除用户 */
exports.deleteUser = async (ctx, next) => {
  let ids = xss(ctx.request.body.ids);
  let data = await userHelper.deleteUser({ids});
  ctx.body = {
    success: true,
    data
  }
};