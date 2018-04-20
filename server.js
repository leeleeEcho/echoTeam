var express = require('express');
var bodyParser = require('body-parser');
var compress = require('compression');

var PORT = 9900;

// express
var app = express();

app.use(compress()); // gzip  + nginx gzip
//限制3M
//app.use(express.limit(1048576 * 3));  //1048576b = 1M
//app.use(express.json({limit: '50mb'}));
// 添加 body-parser 中间件，就可以req接收客户端返回的数据
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
// parse application/json 
app.use(bodyParser.json())

app.use(express.static('./build')); // 静态资源

app.get('/', function (req, res) { res.sendfile('./build/index.html'); }); // 主页
app.get('*', function (req, res) { res.sendfile('./build/index.html'); }); // 404

app.listen(PORT, function () {
    console.log('服务器启动，监听 port： ' + PORT + '  running~');
});