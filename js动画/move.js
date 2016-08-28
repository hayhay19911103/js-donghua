// 运动框架，改变宽，高，透明度，链式运动
/*	function startMove(obj,json,fn){
		var flag=true;//假设所有的运动都到达终点
		clearInterval(obj.timer); 
		obj.timer=setInterval(function(){
			for(attr in json){
				//1取当前值
				var icur=0;
				if (attr=='opacity') {
					icur=Math.round(parseFloat(getStyle(obj,attr))*100);
				} else {
					icur=parseInt(getStyle(obj,attr));
				}
				//2算速度
				var speed=(json[attr]-icur)/8;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);//清除小数
				//3检测停止,没有判断所有的都到达终点
				if (icur!=json[attr]){
					flag=false;
				}
				if (attr=='opacity') {
					obj.style.filter='alpha(opacity:'+(icur+speed)+')';
					obj.style.opacity=(icur+speed)/100;
				} else {
					obj.style[attr]=icur+speed+'px';
				} 
				if(flag){
		    		clearInterval(obj.timer);
					if (fn) {
						fn();
		    		} 
		    	}
		    }		
	    },30);
	}
//获取属性方法
	function getStyle(obj,attr){
	 	if (obj.currentStyle) {
	 		return obj.currentStyle[attr];//针对IE浏览器	
	 	} else {
	 		return getComputedStyle(obj,false)[attr];//针对火狐浏览器
	 	}
 	}
*/

function getStyle(obj,attr){
	 	if (obj.currentStyle) {
	 		return obj.currentStyle[attr];//针对IE浏览器	
	 	} else {
	 		return getComputedStyle(obj,false)[attr];//针对火狐浏览器
	 	}
 	}
	
function startMove(obj,json,fn){
	clearInterval(obj.timer);
	var flag=true;
	obj.timer=setInterval(function(){
		for(attr in json){
		//获取当前值
		var icur=0;
		if(icur=='opacity'){
			icur=Math.round(parseFloat(getStyle(obj,attr))*100);
		}else{
			icur=patseInt(getStyle(obj,attr));
		}
		//设置speed
		var speed=(json[attr]-icur)/8;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		//判断当前值和目标值
		if(json[attr]!=icur){flag=false;}
		if(attr=='opacity'){
			obj.style.filter='alpha(opacity:'+(icur+speed)+')';
			obj.style.opacity=(icur+speed)/100;
			}else{
				obj.style[attr]=icur+speed+'px';
				}
		if(flag){
			clearInterval(obj.timer);
			if(fn){fn();}
			}
		}
	},30);
}