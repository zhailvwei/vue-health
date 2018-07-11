## 市民健康管理系统（后台管理）</br>
### 技术栈
* 前端：`Vue` + `Element.ui`</br>
* 后端：`Koa2` + `Mongoose` + `MongoDB`
### 项目说明
  本项目为市民健康的后台管理系统，包括用户管理、医药电商管理、药品追溯、定点医疗机构定位导航（接入百度地图）、资金统计等模块，前端使用vue-cli脚手架搭建，UI框架为element.ui，后端利用koa2 + mongoose + mongodb搭建简易的nodejs后台服务，为客户端提供数据请求的数据api接口
### 使用说明
#### 安装Nodejs
* koa2下，最好安装node7.0以上版本。官网安装地址[https://nodejs.org/en/](https://nodejs.org/en/)
#### 安装MongoDB
* 官网安装地址[https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/)</br>
* Windows下，MongoDB安装需要先安装Python；Mac OSX自带Python可忽略
#### 从GitHub克隆项目
* `git clone https://github.com/zhailvwei/vue-health.git`
#### 打开终端进入项目根目录
* `cd 根目录`
#### 安装依赖
* `npm i`
#### 启动MongoDB，配置数据存放目录
* /data/db 是 MongoDB 默认的启动的数据库路径(--dbpath)
#### 启动项目
* `npm run serve`
#### 启动服务端
* `npm run mock`
