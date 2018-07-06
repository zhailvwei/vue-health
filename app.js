'use strict'

const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const db = 'mongodb://127.0.0.1:27017/health';

/* mongoose连接数据库 */
mongoose.Promise = require('bluebird');
mongoose.connect(db);

/**
 * 获取数据库表对应的js对象所在的路径
 * @type {[type]}
 */
const models_path = path.join(__dirname, '/app/models');
/**
 * 已递归的形式，读取models文件夹下的js模型文件，并require
 * @param  {[type]} modelPath [description]
 * @return {[type]}           [description]
 */
let walk = function (modelPath) {
  fs.readdirSync(modelPath).forEach(function (file) {
    let filePath = path.join(modelPath, '/' + file)
    let stat = fs.statSync(filePath)

    if (stat.isFile()) {
        if (/(.*)\.(js|coffee)/.test(file)) {
        require(filePath)
        }
    }
    else if (stat.isDirectory()) {
        walk(filePath)
    }
  })
};
walk(models_path);

require('babel-register');
const Koa = require('Koa');
const logger = require('koa-logger');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const app = new Koa();

app.use(logger());
app.use(session(app));
app.use(bodyParser());
app.use(cors());

/**
 * 使用路由转发请求
 * @type {[type]}
 */
const routers = require('./config/router')();

app.use(routers.routes());
app.use(routers.allowedMethods());

// 处理error
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

app.listen('3000', () => {
  console.log(`🌏  http server started at localhost: 3000`);
});