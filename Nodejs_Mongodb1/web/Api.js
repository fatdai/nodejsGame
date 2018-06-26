


// var ServerBlance = require()



var express = require('express');
var app = express();


// 跨域设置
// app.all('*', function (req, res, next) {
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1');
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });

app.get('/login/',function (req,res) {
    var userName = req.query.userName;
    console.log('/login/-- userName:',userName);
});


app.get('/testlogin/:userName',function (req,res) {
    var userName = req.params['userName'];
    console.log('/login/-- userName:',userName);
    res.end('hello world!');
});


app.get('/getHallUrl/:id',function (req,res) {

});


app.listen(3000);
console.log('web服务器启动成功!!!!');