onload = function(){
	function getStyleAttr(obj, attr) {
		if(window.getComputedStyle) { //支持IE9+, 谷歌, 火狐..获取页面元素样式
			return getComputedStyle(obj, null)[attr];
			//var style = window.getComputedStyle("元素", "伪类");
		}else{
			return obj.currentStyle[attr]; //支持IE8-
	   }
}
	
	var btn2 = document.getElementById("btn2");
	var btn1 = document.getElementById("btn1");
	var song = document.getElementById("song");
	var geci = document.getElementById("geci");
	var btn3 = document.getElementById("btn3");
	var time1 = document.getElementById("time1");
	var time2 = document.getElementById("time2");
	var time3 = document.getElementById("time3");
	var box = document.getElementById("box");
	var aa = document.getElementById("aa");
	var obox = document.getElementById("obox");
	var box2 = document.getElementById("box2");
	var box3 = document.getElementById("box3");
	var box4 = document.getElementById("box4");
	var list = document.getElementById("list");
	var gun = document.getElementById("gun");
	var oi = document.getElementsByTagName("i");
	var oimg2btn = document.getElementById("oimg2");
	var img4 = document.getElementById("img4");
	var range1 = document.getElementById("range1");
	var list_li = list.getElementsByTagName("li");
	var list_audio = list.getElementsByTagName("audio");
	var player = new Audio();
	
	//全局变量
	var i =0;
	var ge = 2;
	var s = 0;//秒
	var m1 = 0;//分
	var timer;
	var timer2;
	var timer3;
	//歌词
//	function g(){
//		//歌词
//	var str= ",明天你好—冯提莫,词：牛奶咖啡,曲：王海涛,看昨天的我们 走远了,在命运广场中央 等待,那模糊的 肩膀,越奔跑 越渺小,曾经 并肩往前的 伙伴,在举杯 祝福后都 走散,只是那个 夜晚,我深深 的都留藏在心坎,长大以后 我只能奔跑,我多害怕 黑暗中跌倒,明天你好 含着泪微笑,越美好 越害怕得到,每一次哭 又笑着奔跑,一边失去 一边在寻找,明天你好 声音多渺小,却提醒我 勇敢是什么,当我朝着反方向走去,在楼梯的角落 找勇气,抖着肩膀 哭泣,问自己 在哪里,曾经 并肩往前 的伙伴,沉默着 懂得我的委屈,时间它总说谎,我从 不曾失去 那些肩膀,长大以后 我只能奔跑,我多害怕 黑暗中跌倒,明天你好 含着泪微笑,越美好 越害怕得到,每一次哭 又笑着奔跑,一边失去 一边在寻找,明天你好 声音多渺小,却提醒我,长大以后 我只能奔跑,我多害怕 黑暗中跌倒,明天你好 含着泪微笑,越美好 越害怕得到,每一次哭 又笑着奔跑,一边失去 一边在寻找,明天你好 声音多渺小,却提醒我,勇敢是什么 ";
//	var arr = str.split(",");
//		for(var k=0;k<arr.length;k++){
//		//创建一个p标签
//		var p1 = document.createElement("p");
//		p1.innerHTML = arr[k];
//		p1.className = "p1";
//		song.appendChild(p1)
//	}
//	console.log(arr);
//	var q =0;
//	var song_p = song.getElementsByTagName("p");
//	clearInterval(timer3);
//	timer3 = setInterval(function(){
//		if(i!=2){
//			clearInterval(timer3);
//			song.innerHTML = "<br /><br /><br /><br /><br /><br /><br /><br />此歌无歌词";
//			return;
//		}
//		for(var p = 0;p<q;p++){
//			song_p[q].setAttribute("class","p1");
//		}
//		q++;
//		song_p[q].className = "p11";
//		tan(song,"top",-(20*q));
//		console.log(q)
//		if(q==arr.length-2){
//			clearInterval(timer3);
//		}
//	},3000);
//	}
	//音乐初始化
	init();
	function init(){
		list_li[i].style.color = "red";
		player.src = list_audio[i].src;
		gun.innerHTML = list_li[i].innerText;
	}
	//点击播放按钮
	btn2.onclick = function(){
		play();
	}
	//音乐播放
	function play(){
		//true暂停
		if(player.paused==true){	
		    player.play();//音乐播放
		    btn2.style.backgroundPosition = "-2px -98px";
		    move();
		}else{
			//音乐暂停
			//currentTime: 开始到播放现在所用的时间
			//记住当前歌曲的下标
			ge =i;
			clearInterval(timer2);
			clearInterval(timer3);
			player.pause();
			clearInterval(timer);
		    btn2.style.backgroundPosition = "-98px -0px";
		}
	}
	//点击音量按钮
	oimg2btn.onclick = function(){
		range1.style.display = "block";
		range1.setAttribute("autofocus","autofocus");
	}
	//调节音量
	range1.onmousedown= function(){
		document.onmousemove= function(){
			console.log(range1.value/100);
		    player.volume = range1.value/100;
		}
	}
	range1.onblur = function(){
		this.style.display = "none";
	}
	//滚动字幕
	function move(){
		clearInterval(timer);
		gun.innerHTML = list_li[i].innerText;
		timer = setInterval(function(){
//			console.log(player.currentTime);
			var gunleft = gun.offsetLeft;
			//速度
			var speed = -2;
			if(gunleft+gun.offsetWidth<=0){
				gun.style.left = box.offsetWidth+"px";
			}else{
				gun.style.left = gunleft+speed+"px";
			}
			//歌曲播放完毕
			if(player.ended==true){
				player.currentTime = 0;
				s=0;
				m1 = 0;
				//单曲循环
				if(getStyleAttr(oi[0],"color")=="rgb(255, 0, 0)"){
					clearInterval(timer);					
					//字幕回到中间
					gun.style.left = 80+"px";
					 play();//音乐播放
					 
				}
				//顺序循环
				if(getStyleAttr(oi[1],"color")=="rgb(255, 0, 0)"){
					clearInterval(timer);
					i++;
					if(i==list_audio.length){
						i=0;
					}
					console.log(i)
					player.src = list_audio[i].src;
					for(var k=0;k<list_li.length;k++){
						list_li[k].style.color = "black";
					}
					list_li[i].style.color = "red";
					//字幕回到中间
					gun.style.left = 80+"px";
					play();//音乐播放
				}
				//随机循环
				if(getStyleAttr(oi[2],"color")=="rgb(255, 0, 0)"){
					clearInterval(timer);
					//获取随机数
					i = parseInt(Math.random()*list_li.length);
					player.src = list_audio[i].src;
					for(var k=0;k<list_li.length;k++){
						list_li[k].style.color = "black";
					}
					list_li[i].style.color = "red";
					//字幕回到中间
					gun.style.left = 80+"px";
					play();//音乐播放
				}
			}
			
		},100)
	}
	//单击歌曲名，选中它
	for(var j=0;j<list_li.length;j++){
		list_li[j].index = j;
		list_li[j].onclick = function(){			
			for(var k=0;k<list_li.length;k++){
				list_li[k].style.color = "white";
			}
			clearInterval(timer2);
			clearInterval(timer3);
			this.style.color = "red";
			btn2.style.backgroundPosition = "-98px -0px";
			i = this.index;
		    player.src = list_audio[this.index].src;
		    
		}
	}
	//双击歌曲就播放
	for(var j=0;j<list_li.length;j++){
		list_li[j].ondblclick = function(){
			play();
			
		}
	}
	//上一首
	btn1.onclick = function(){
		for(var k=0;k<list_li.length;k++){
				list_li[k].style.color = "white";
		}
		i--;
		//如果是第一首歌曲，跳到最后一首歌
		if(i==-1){
			i = list_li.length-1;
		}
		init();
		clearInterval(timer3);
		play();
	}
	//下一首
	btn3.onclick = function(){
		for(var k=0;k<list_li.length;k++){
				list_li[k].style.color = "white";
		}
		i++;
		//如果是第一首歌曲，跳到最后一首歌
		if(i==list_audio.length){
			i = 0;
		}
		init();
		clearInterval(timer3);
		play();
	}
	//媒体播放
	player.onplay = function(){
		//获取歌曲的总时间
		setTimeout(function(){
			console.log(player.duration);
			var f = parseInt(player.duration/60);
			var m = parseInt(player.duration)-f*60;
//			console.log(f+","+m);
			if(f>=10){
				if(m>=10){
					time3.innerHTML = f+":"+m;
				}else{
					time3.innerHTML = f+":0"+m;
				}	
			}else{
				if(m>=10){
					time3.innerHTML = "0"+f+":"+m;
				}else{
					time3.innerHTML = "0"+f+":0"+m;
				}
				
			}
		},1000)
		t();
		tuozhuai()
//		g();
	}
    //时间
	function t(){
//		console.log(player.currentTime);
		//判断是否重新播放同一首歌
		if(ge==i || box3.getAttribute("class")=="box3"){
			s = parseInt(player.currentTime-m1*60);//秒
		    m1 = parseInt(player.currentTime/60);//分
		    box3.removeAttribute("class");
//		    console.log(s);
//		     console.log(m1);
//			console.log(player.currentTime);
			
//		    alert("a");
		}else{
			s = 0;//秒
		    m1 = 0;//分
		}
		
		clearInterval(timer2);
		var a = 0;
		timer2 = setInterval(function(){
			s++;

			if(s==60){
				m1+=1;
				s=0;
			}
			if(s<10){
				if(m1<10){
					time2.innerHTML = "0"+m1+":0"+s;
				}else{
					time2.innerHTML = m1+":0"+s;
				}
			}else{
				if(m1<10){
					time2.innerHTML = "0"+m1+":"+s;
				}else{
					time2.innerHTML = m1+":"+s;
				}
			}
			if(parseInt(player.duration)==(s+m1*60)){
				clearInterval(timer2);
			}
			//改变蓝色小球的位置
			a = (s+m1*60)/parseInt(player.duration);
			box3.style.left = a*(box2.offsetWidth-box3.offsetWidth)+20+"px";
			box4.style.width = box3.offsetLeft+"px";
		},1000)
	}
	//播放模式的样式
		for(var j = 0;j<oi.length;j++){
			oi[j].onclick = function(){
				for(var k =0;k<oi.length;k++){
					oi[k].style.color= "black";
				}
				this.style.color = "red";
			}
		}
    //拖拽蓝色小球
  function tuozhuai(){
    box3.onmousedown = function(evt){
    	var oEvent = evt || event;
		oEvent.cancelBubble = true;//阻止冒泡
		//2, 停止传播
		oEvent.stopPropagation();
    	clearInterval(timer2);
    	var box3left;
    	document.onmousemove = function(evt){
    		var oEvent = evt || event;
    		var x = oEvent.clientX;
    		oEvent.cancelBubble = true;//阻止冒泡
    		//2, 停止传播
			oEvent.stopPropagation();
//  		console.log(x);
//  		console.log((box.offsetLeft+box3.offsetWidth+1));
    		//左边
    		if(x<=(box.offsetLeft+obox.offsetLeft+20)){
    			box3.style.left = 20+"px";
    		}else if(x>=(box.offsetLeft+box2.offsetWidth)){
    			box3.style.left = 260+"px";
    		}else{
    			box3.style.left = x-obox.offsetLeft-box.offsetLeft+"px";
    		} 
    		console.log(box3left);
    		box3left = box3.offsetLeft;
    		box4.style.width = box3left+"px";
    		player.currentTime = parseInt(box3left/box2.offsetWidth*player.duration);

    	}
    	document.onmouseup = function(){
    		s=player.currentTime;
    		m1=parseInt(player.currentTime/60);
    		//给蓝色小球加一个属性
    		box3.setAttribute("class","box3");
    		
    		t();
    		document.onmousemove = null;
    		document.onmouseup = null;
    	}
    }
  }  
  //点击头像
//oimg.onclick = function(){
//	box.style.display = "none";
//	geci.style.display = "block";
//}
//img4.onclick = function(){
//	box.style.display = "block";
//	geci.style.display = "none";
//}
}
