$(function() {
	//检测滑轮事件
	var num=0;
	var flag = true;
	$(document).mousewheel(function(event,delta){
		if(flag == true){

		flag=false;
		//alert('ok');
		//console.log(delta);
		/*
		0   -1 
		1   -1
		2   -1
		3   -1

		1   -1
		2   -1
		3   -1

		 */
		//top
		num=num-delta;
		/*
		0   +1
		1   +1
		2
		*/
		if(num < 0){
			num=0;
		}
		if(num>5){
			num=5;
		}
		console.log(num);
		$('.wrap').stop().animate({top:-num*100+'%'}, 500,function(){
			flag=true;
		});

		}
	});
});