function getStyleAttr(obj, attr) {
		if(window.getComputedStyle) { //支持IE9+, 谷歌, 火狐..获取页面元素样式
			return getComputedStyle(obj, null)[attr];
			//var style = window.getComputedStyle("元素", "伪类");
		}else{
			return obj.currentStyle[attr]; //支持IE8-
	   }
}
	//obj是节点对象，
	//attr 属性
	//target是目标值
	//s多少秒执行一次定时器
function tan(obj,attr,target,fn){
	console.log(target);
	clearInterval(obj.timer);
	var speed = 0;
	obj.timer = setInterval(function(){
			//目标值
			target = target;
			//获取box的初始位置
			var start = parseInt(getStyleAttr(obj,attr));
			//给一个越来越小的速度
			speed=-5;
			//判断是否结束运动
			if(start==target){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}else{
				//开始运动
		        obj.style[attr] = start+parseInt(speed)+"px";
			}
		},500)
	}