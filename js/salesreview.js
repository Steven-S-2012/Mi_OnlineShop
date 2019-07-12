
// 客户评价控制
(function reviewControl() {
	// 选中标签，构建标签列表
	var elContent = document.getElementById('homeelec-content');
	elContent.addEventListener("mouseover", function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;		
		if (target.nodeName == 'LI') {
			// 取消所有的 brick-item-active 
			var liList = target.parentNode.getElementsByTagName('li');
			for (var i = 0; i < liList.length; i++) {
				liList[i].className = liList[i].className.replace(' brick-item-active','')
			}
			// 对目标添加 brick-item-active
			target.className = target.className + ' brick-item-active';
			// 取元素索引
			// var elIndex = Array.prototype.indexOf.call(liList,target);
		}
	});
	elContent.addEventListener("mouseleave", function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;
		var activeItems = target.getElementsByClassName('brick-item-active');		
		// 去除 brick-item-active
		for (var i = 0; i < activeItems.length; i++) {
			activeItems[i].className = activeItems[i].className.replace(' brick-item-active','');	
		}		
	});
})()