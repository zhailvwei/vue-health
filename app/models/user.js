'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  gender: String,
  rank: String,
  age: Number,
  birthdate: String,
  email: String,
  mobile: String,
  address: String,
  memo: String,
  id: String
});

// 参数User 数据库中的集合名称, 不存在会创建.
let User = mongoose.model('User', UserSchema);

module.exports = User;