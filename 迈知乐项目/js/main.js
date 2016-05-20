$(function(){
	var setTime="";
	$(".dropdown").mouseenter(function () {
		// 点击弹出下拉框
		var $_this=$(this);
		setTime=setTimeout(function(){
		$_this.find(".dropdown-list").slideDown(200);

		},0);
		$_this.css("border","none");
	}).mouseleave(function(e){
		e.preventDefault();
		clearTimeout(setTime);
		$(this).find(".dropdown-list").slideUp(200);
	});

	$("body").on("click",function (e) {
		// 点下拉框击空白区域隐藏
		var $_this=$(this);
		if($(e.target).is(".dropdown-list")||$(e.target).is(".dropdown a")){
			return;
		}else{
			$(".dropdown-list").hide();
		}
	})

});