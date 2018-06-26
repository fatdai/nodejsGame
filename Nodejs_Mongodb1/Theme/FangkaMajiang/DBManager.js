
var MongoseAsync = require('../../core/MongooseAsync');
// var UnitTools = require('../../core/UnitTools');

var IDs = require('./IDs');


class DBManager{
    constructor(){
        this.mog = new MongoseAsync();
    }

    // 初始化数据库
    async initDB(){
        var connectOK = await this.mog.connect("root","123456","127.0.0.1","27017","majiang");
        if(!connectOK){
            console.log('连接mongodb 错误!');
            return Promise.resolve(false);
        }

        // loginTime
        // createTime
        // userName    做唯一索引
        // pwd
        // score
        // openId
        this.mog.makeModel('userInfo',{'openId':String,'userName':String,'pwd':String,'createTime':Date,'loginTime':Date,'score':Number});
        return Promise.resolve(true);
    }


    // 添加一个用户
    async addUser(userName,pwd){
        var UserInfo = this.mog.getModle('userInfo');
        var user = new UserInfo();
        user.userName = userName;
        user.pwd = pwd;
        user.createTime = new Date();
        user.loginTime = new Date();
        user.score = 0;
        user.openId = IDs.GenId();
        var ret = await user.save();
        return Promise.resolve(ret);
    }


    // 查询一个用户
    async findUser(userName){
        var UserInfoModel = this.mog.getModle('userInfo');
        var info = await  UserInfoModel.findOne({'userName':userName}).catch(function () {
            info = null;
        });
        return Promise.resolve(info);
    }

    // 更新一个用户
    async updateUser(userName,values){
        var UserInfoModel = this.mog.getModle('userInfo');
        var info = await  UserInfoModel.update({'userName':userName},values).catch(function () {
             info = null;
        });
        return Promise.resolve(info);
    }

    static  instance(){
        if(DBManager.g_Instance == null){
            DBManager.g_Instance = new DBManager();
        }
        return DBManager.g_Instance;
    }
}


DBManager.g_Instance = null;

module.exports = DBManager;