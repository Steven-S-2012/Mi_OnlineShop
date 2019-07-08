

// 滚动条控制
(function scrollAble() {	
	// 获取目标对象
	var topLink = document.getElementsByClassName('J_barToTop')[0];
	// console.log(topLink) 这里如果不是在 <head><script></script></head> 处使用异步加载，就会出现取不到值的问题，
	// 因为如果同步的话在加载script的时候DOM还没有加载完，document 下的子元素还没有完全加载，topLink 就取不到值，也就是undefined
	// 设置初始变量
	var lastScroll = 0, checkDelay = null, i = 0;
	// 滚动位置判断
	function scrollCheck() {
		
		// 判断当前滚动位置是否变化	
		if (i = document.documentElement.scrollTop || document.body.scrollTop,i === lastScroll || lastScroll == 0){			
			var visibleHeight = document.documentElement.clientHeight || document.body.clientHeight;
			var scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;				
			topLink.className = (visibleHeight >= scrollToTop) ? (topLink.className.indexOf(' hidden') == -1) ? topLink.className + " hidden" : topLink.className : topLink.className.replace(" hidden","");
		}		
	};
	// 页面加载后先执行一次
	window.onload = function() { scrollCheck() };
	// 绑定滚动事件
	document.onscroll = function() {
		clearTimeout(checkDelay);
		checkDelay = setTimeout(scrollCheck,100);
		// 保留当前滚动位置
		lastScroll = document.documentElement.scrollTop || document.body.scrollTop;
	};
	// 绑定回到顶部按钮事件
	/**    
    总时间（duration）:500ms 
    频率（intervalTime）：多长时间走一步 10ms 
    起始位置(target): 起始的位置（点击时的scrollTop）
    当前位置(curPosition): 每次滚动间隔的位置
    步长(step)：每一次走得距离  (target/duration)*interval 
  	**/
	$('.J_barToTop')[0].onclick = function() {
		// 设置初始变量
		var curPosition, duration = 100, intervalTime = 10, target = document.documentElement.scrollTop || document.body.scrollTop;
		var step = target / duration * intervalTime;
		// 滚动函数
		var timer = null;
		!function() {
			curPosition =  document.documentElement.scrollTop || document.body.scrollTop;
			// 如果当前位置==0, 则停止滚动
			if (curPosition == 0) {
				window.clearTimeout(timer);
				return;
			}
			document.documentElement.scrollTop -= step;
			document.body.scrollTop -= step;
			// 再循环
			timer = setTimeout(topLink.onclick, intervalTime);
		}();		
	}
})();