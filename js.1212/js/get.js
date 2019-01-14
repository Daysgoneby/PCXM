 //定义函数获取非行间样式，obj为获取的对象，attr为非行间样式
 function getStyle(obj,attr){
 	if(obj.currentStyle){
 		//当前为IE浏览器
 		return obj.currentStyle[attr]

 	}else{
 		//非IE浏览器
 		return getComputedStyle(obj,false)[attr]

 	}

}