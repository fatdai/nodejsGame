var assert = require('assert');
var DBManager = require('../Theme/FangkaMajiang/DBManager');


describe('测试mongodb', function() {

    // describe('#测试连接', function() {
    //     it('应该返回true',async function() {
    //         var ins = DBManager.instance();
    //         var isConnect = await ins.initDB();
    //         assert.equal(true,isConnect);
    //     });
    // });

    var ins = DBManager.instance();
    it('应该返回true',async function() {
        var isConnect = await ins.initDB();
        assert.equal(true,isConnect);
    });

    // it('插入一个用户',async function () {
    //     var ret = await ins.addUser('zhangsan','123');
    //     console.log('ret',ret);
    // });

    it('查询一个用户',async function () {
        var ret = await ins.findUser('lisi');
        console.log('查询 lisi:',ret);
    });

    it('修改lisi的得分',async function () {
        var ret = await ins.updateUser('lisi',{'score':111});
        console.log('修改 lisi 得分结果:',ret);
    });
});
