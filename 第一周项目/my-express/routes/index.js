var express = require('express');
var router = express.Router();
var UserModel = require("../model/User");
var GoodsModel = require("../model/Goods");
var multiparty = require("multiparty");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录界面' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', { title: '后台界面' });
});

router.get('/add_goods', function(req, res, next) {
  res.render('add_goods', { title: '商品添加界面' });
});

router.get('/list_page1', function(req, res, next) {
  res.render('list_page1', { title: '商品列表界面' });
});

//商品信息
router.post('/api/goods_upload', function(req, res, next) {
	var form = new multiparty.Form({
		uploadDir: "public/images"
	});
	var result = {
		code: 1,
		message: "商品信息保存成功"
	};
	form.parse(req, function(err, body, files){
		if(err) {
			console.log(err);
		}
		console.log(body);
		var goods_name = body.goods_name[0];
		var price = body.price[0];
		var imgPath = files["img"][0].path.replace("public\\", "");
		var gm = new GoodsModel();
		gm.goods_name = goods_name;
		gm.price = price;
		gm.imgPath = imgPath;
		gm.save(function(err){
			if(err) {
				result.code = -99;
				result.message = "商品保存失败";
			}
			res.json(result);
		})
	})
});



router.post('/api/login4ajax', function(req, res, next) {
	var username = req.body.username;
	var psw = req.body.psw;
	var capthcha = req.body.capthcha;
	var result = {
		code: 1,
		message: "登录成功"
	};
if(capthcha == ""){
		result.code = -554;
		result.message = "验证码不能为空";
		res.json(result);
		return;
}
if(username=="admin" && psw=="h5h5h5h5"){
		res.json(result);

	}else {
		result.code = -555;
		result.message = "用户名或密码错错误，请重新输入";
		res.json(result);
	}
})

module.exports = router;
