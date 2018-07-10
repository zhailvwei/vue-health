'use strict';

let mongoose = require('mongoose');
let User = mongoose.model('User');

/* 查找用户 */
exports.findAllUsers = async (params) => {
  let pageSize = params.pageSize;
  let currentPage = params.currentPage;

  let onePageUsers = await User.find({}).sort({"_id": 1}).skip((currentPage-1) * pageSize).limit(pageSize);
  let userTotalCount = await User.count();
  
  return {
    onePageUsers: onePageUsers,
    userTotalCount: userTotalCount
  };
};

/* 查找特定用户 */
exports.findFilterUsers = async (params) => {
  let pageSize = params.pageSize;
  let currentPage = params.currentPage;
  let property = params.select;
  let pattern = new RegExp(params.keyword, 'i');

  let onePageFilterUsers = await User.find({[property]: {$regex: pattern}}).sort({"_id": 1}).skip((currentPage-1) * pageSize).limit(pageSize);
  let filterUserTotalCount = await User.find({[property]: {$regex: pattern}}).count();

  console.log(filterUserTotalCount)
  return {
    onePageFilterUsers: onePageFilterUsers,
    filterUserTotalCount: filterUserTotalCount
  }
};

/* 查找单个用户 */
exports.findUser = async (params) => {
  let res;
  try {
    res = await User.find({
      id: params.id
    });
  } catch (error) {
    res = '没有该用户'
  }

  return res;
};

/* 新增用户 */
exports.addUser = async (user) => {
  user = await user.save();
  return user;
};

/* 编辑用户 */
exports.updateUser = async (user) => {
  user = await User.update({id: user.id}, {
    $set: {
      username: user.username,
      gender: user.gender,
      rank: user.rank,
      age: user.age,
      birthdate: user.birthdate,
      email: user.email,
      mobile: user.mobile,
      address: user.address,
      memo: user.memo
    }
  });
  return user;
};

/* 删除用户 */
exports.deleteUser = async ({ids}) => {
  let flag = false;
  console.log('flag==========>' + flag);
  await User.remove({id: {$in: ids.split(',')}}, function (err) {
    if (err) {
      flag = false
    } else {
      flag = true
    }
  });
  console.log('flag=====await=====>' + flag);
  return flag;
};
