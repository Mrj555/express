var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var User = new Schema({
	username : String,
	psw 	 : String,
	yzm : String,
	create_date : {type:Date,default:Date.now}
})

//创建model对象
var UserModel = mongoose.model("user",User);

module.exports = UserModel;
