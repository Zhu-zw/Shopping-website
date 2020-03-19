

//第一种轮播
// function f1(){
	// var st = localStorage.getItem('islogin');
	// var exit = document.querySelectorAll('.nav_main')[1];
	// if(st == 'test'){
	// 	var login_name = document.querySelectorAll('.nav_main')[0];
	// 	login_name.innerHTML = 'root';
	// 	exit.innerHTML = '退出';
	// }
	// exit.onclick=function(){
	// 	localStorage.removeItem('islogin');
	// }
	
	
// 	//轮播
// 	//获取元素节点
// 	var box = document.querySelector("#box");
// 	var pic1 = document.querySelector("#box_pic");
// 	var left = document.querySelector("#left");
// 	var right = document.querySelector("#right");
// 	var listarr1 = document.querySelectorAll("#box_list li");
// 	// 将第一个li标签的背景颜色设置为#f95882
// 	listarr1[0].style.backgroundColor = '#f95882';
// 	// 启动一个定时器更换pic中的src属性，达到图片轮播的目的
// 	var page=1;
// 	var timer1=setInterval(startloop,3000);
	
// 	function startloop(){
// 		page++
// 		changePage();
// 	    }
// 	function changePage(){
// 		if(page==9){
// 			page=1;
// 			}
// 		if(page==0){
// 			page=8;
// 			}
			
			
// 		pic1.src = 'pic/wp'+page+'.jpg';
		
// 		pic1.onclick = function(){
// 			window.open('Fashion'+page+'.html');
			
// 		}
		
// 		// 让小圆点的颜色随着图片的轮播而改变
// 		for( var i=0;i<listarr1.length;i++){
// 			 listarr1[i].style.backgroundColor = "gainsboro";
// 		    }
// 		 listarr1[page-1].style.backgroundColor="#f95882";
// 	    }
// 		//自动轮播已经好了，接着，鼠标滑入，停止轮播，显示左右按钮。鼠标滑出，继续轮播，按钮隐藏。
// 	box.addEventListener('mouseover',overfunc,false);
// 	function overfunc(){
// 		// 停止定时器
// 		clearInterval(timer1);
// 		// 显示左右按钮
// 		left.style.display = 'block';
// 		right.style.display = 'block';
// 	    }
// 	box.addEventListener('mouseout',outfunc,false);
// 	function outfunc(){
// 		// 重启定时器
// 		timer1 = setInterval(startloop,3000);
// 		//隐藏左右按钮
// 		left.style.display = 'none';
// 		right.style.display = 'none';
// 	    }
	
// 	left.addEventListener('mouseover',deep,false);
// 	right.addEventListener('mouseover',deep,false);
// 	function deep(){
// 		this.style.backgroundColor = 'rgba(0,0,0,0.6)';
// 	    }
// 	left.addEventListener('mouseout',nodeep,false);
// 	right.addEventListener('mouseout',nodeep,false);
// 	function nodeep(){
// 		this.style.backgroundColor = 'rgba(0,0,0,0.2)';
// 	    }
	
// 	right.addEventListener('click',function(){
// 		page++;
// 		changePage();
// 	    },false);
// 	left.addEventListener('click',function(){
// 		page--;
// 		changePage();
// 	    },false);
	
// 	for(var i = 0;i<listarr1.length;i++){
// 		listarr1[i].index = i+1;
// 		listarr1[i].addEventListener('mouseover',function(){ 
// 			page = parseInt(this.index);
// 			changePage();
// 		    },false);
// 	   }
	   
// }

//第二种轮播
function f1(){
	
	var st = localStorage.getItem('islogin');
	var exit = document.querySelectorAll('.nav_main')[1];
	if(st == 'test'){
		var login_name = document.querySelectorAll('.nav_main')[0];
		login_name.innerHTML = 'root';
		exit.innerHTML = '退出';
	}
	exit.onclick=function(){
		localStorage.removeItem('islogin');
	}
	
	var div = document.querySelector('#flash');
	var img = document.querySelectorAll('#flash_pic');; 
	var ul = document.querySelectorAll('#flash_ul')[0];
	var li = document.querySelectorAll('#flash_ul li');
	var div_r = document.querySelector('.span_r');
	var div_l = document.querySelector('.span_l');
	var len = img.length;
	var count = 0; 
	
	
	function run(){ 
	    count++;
		//当图片加载到最后一张时，使其归零
	    count = count==8?0:count; 
	    for(var i=0;i<len;i++){
	        img[i].style.display = 'none'; 
	    }
	    img[count].style.display = 'block'; 
	    for(var i=0;i<li.length;i++){
	        li[i].style.backgroundColor = "#fff";
	    }
	    li[count].style.backgroundColor = "#f40";
	}
	
	var timer = setInterval(run,3000); 
	div.onmouseover = function(){
	    div_r.style.display = 'block';
	    div_l.style.display = 'block';
	    clearInterval(timer);
	}
	div.onmouseleave = function(){ 
		//定义鼠标移出事件，当鼠标移出div区域，轮播继续
	    div_r.style.display = 'none';
	    div_l.style.display = 'none';
	    timer = setInterval(run,3000);
	}
	div_l.addEventListener('mouseover',deep,false);
	div_r.addEventListener('mouseover',deep,false);
	function deep(){
		this.style.backgroundColor = 'rgba(0,0,0,0.6)';
	}
	div_l.addEventListener('mouseout',nodeep,false);
	div_r.addEventListener('mouseout',nodeep,false);
	function nodeep(){
		this.style.backgroundColor = 'rgba(0,0,0,0.3)';
	}
	for(var i=0;i<len;i++){
	    //定义index记录当前鼠标在li的位置
		li[i].index = i; 
	    li[i].onmouseenter = function(){
	        for(var i=0;i<len;i++){
	            li[i].style.background = '#fff';
	            img[i].style.display = 'none';
	        }
	    this.style.background = '#ff9900';
	    img[this.index].style.display = 'block';
	   }
	}
	div_r.onclick = function(){ 
		//因为span没有设置宽高，直接把事件添加到他的父级
	    run();
	}
	function reverse(){
	    count--;
	    count = count==-1?7:count;
	    for(var i=0;i<len;i++){
	        img[i].style.display = 'none';
	    }
	    img[count].style.display = 'block';
	    for(var i=0;i<li.length;i++){
	        li[i].style.backgroundColor = "#fff";
	    }
	    li[count].style.backgroundColor = "#f40";
	}
	div_l.onclick = function(){
	//重新设置函数
	reverse(); 
	}
}




function f2(){
	var listarr2 =document.querySelectorAll("#rec_liststar li");
	var pic2 =  document.querySelector("#rec_pic");

	//  <——?——for循环总是切换到最后一张图片 ——?——>    解决办法：使用闭包的形式
	//  <——?——getElementById和querySelector——?——>
	for (var i=0;i<listarr2.length;i++){
		(function(i){
			listarr2[i].onmousemove=function(){
				listarr2[i].style.backgroundColor = 'gainsboro';
				pic2.src = 'pic/rec'+(i+1)+'.jpg';
			}
			listarr2[i].onmouseleave=function(){
				listarr2[i].style.backgroundColor = 'white';
			}
		})(i)
	}
}



window.onload=function(){
	f1();
	f2();
	window.onbeforeunload=function(){
		localStorage.removeItem('islogin');
	}
}
