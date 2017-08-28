/**
 * Created by lenovo on 2017/7/26.
 */
var models = require('../model/models');
/********
 * 路由
 * @param app
 */
module.exports = function (app) {

    //文章列表
    app.get('/artical', function (req, res) {

        // 输出 JSON 格式
        var type = req.query.type;
        var author = req.query.author;

        console.log(type);
        // res.end(JSON.stringify(type));

        models.getarticalList(type,author, function (rows) {
            res.json({
                list: rows
            })
            console.log(rows);
            // res.send(JSON.stringify(rows));
        });

    });

    //文章详情
    app.get('/detail', function (req, res) {
        
                // 输出 JSON 格式
                var response = {
                    "id":req.query.id,
                    "author":req.query.author,
                };
        
                console.log(response);
                // res.end(JSON.stringify(type));
        
                models.getDetai(response, function (rows) {
                    res.json({
                        info: rows
                    })
                    console.log(rows);
                    // res.send(JSON.stringify(rows));
                });
        
            });

    //个人信息
    app.get('/info', function (req, res) {

        // 输出 JSON 格式
        var type = req.query.type;

        console.log(type);
        // res.end(JSON.stringify(type));

        models.getinfo(type, function (rows) {
            res.json({
                info: rows
            })
            console.log(rows);
            // res.send(JSON.stringify(rows));
        });

    });

    //登录接口
    app.get('/login', function (req, res) {

        // 输出 JSON 格式
        var username = req.query.username;
        var password = req.query.password;

        console.log(username);
        // res.end(JSON.stringify(type));

        models.Login(username, password, function (result, Headimg,QQ,TEL) {
            res.json({
                state: result,
                data: Headimg,
                QQ:QQ,
                TEL:TEL
            })
            console.log(result);
            console.log(Headimg);
            // res.send(JSON.stringify(rows));
        });

    });


    //发表文章接口
    app.get('/publish', function (req, res) {

        // 输出 JSON 格式
        var response = {
            "title":req.query.title,
            "author":req.query.author,
            "content":req.query.content,
            "time":req.query.time
        };

        models.publishArticle(response, function (result) {
            res.json({
                state: result
            })
            console.log(result);
        });

    });

}