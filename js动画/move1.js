
startMove(){

}
function getStyle(obj,attr){
	 	if (obj.currentStyle) {
	 		return obj.currentStyle[attr];//针对IE浏览器	
	 	} else {
	 		return getComputedStyle(obj,false)[attr];//针对火狐浏览器
	 	}
 	}
