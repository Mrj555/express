
  	function GetYzm () {
  		var YZMTU = document.getElementById("YZM-TU");
  		YZMTU.src = "http://www.doudoufei.top/shops/admin/index.php?act=captcha&"+ Math.random();
  	}


function login(){
$.ajax({
			url: "/api/login4ajax",
			type: "post",
			data: {
				username: $("#username").val(),
				psw: $("#psw").val(),
				yzm:$("#captcha").val()
			},
			success: function(res) {
				console.log(res);
				if(res.code == 1) {
					alert(res.message);
					location.href = "/admin";
					
				} else {
					alert(res.message);
				}
			}
		})
}
