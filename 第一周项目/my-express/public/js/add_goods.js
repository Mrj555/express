$(function(){
	//选项卡
	$("#tabbar-left p span").click(function(){
		var index = $(this).index();
		for(var i = 0;i<$("#tabbar-left p span").length;i++){
			$("#tabbar-left p span").eq(i).attr("class","tab-back");
			$(".xuan_table").eq(i).attr("class","xuan_table xuan-yin")
		}
		$(this).attr("class","tab-check");
		$(".xuan_table").eq(index).attr("class","xuan_table")
	})
	
})
