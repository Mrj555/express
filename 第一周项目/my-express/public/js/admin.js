$(function(){
//菜单
$("#click").click(function () {
		if($(".menu-iul").css("display") == "none"){
			$("#none").css("display","block");
		}else{
			$("#none").css("display","none");
		}
				event.stopPropagation();
	$(this).find(".menu-iul").toggle();
  		
		return false;
  	
  })

		var toggle = true;
		$(".ico_15").click(function () {

		if(toggle){
				$(this).css('background-image','url(images/menu1_15.png)');
			toggle = false;
			}else {
				$(this).css('background-image','url(images/menu_15.png)');
				toggle = true;
			}
		})

})