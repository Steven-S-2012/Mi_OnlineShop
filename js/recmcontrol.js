

// 推荐栏左右滑动控制, 3Dcard 动画控制
(function recmControl() {
	// 获取按键
	var leftControl = document.getElementsByClassName('control-prev')[0],
		rightControl = document.getElementsByClassName('control-next')[0],
		ulFrame = document.getElementsByClassName('xm-carousel-col-5-list')[0],
		ulStyle = ulFrame.style, 
		limit = ulStyle.width,
		limitNum = 1240-parseInt(limit.substr(0,limit.indexOf('px'))); // 1240 is half of carousel slide (2480).
		
	// 计算margin-left的值
	/**
	@curMargin: 当前 margin-left 的值
	@direction: 运动方向(1 : left， -1 : right)
	**/
	function updateMargin(targStyle, direction) {
		var pastMargin = targStyle.marginLeft, dirc = direction;
		var marginNum = parseInt(pastMargin.substr(0,pastMargin.indexOf('px'))) + dirc * 1240;		
		if (marginNum >= 0) marginNum = 0;
		if (marginNum <= limitNum) marginNum = limitNum;		
		return marginNum + 'px'
	}
	// 绑定滚动事件
	leftControl.onclick = function() {	
		ulStyle.marginLeft = updateMargin(ulStyle,1);		
		rightControl.className = rightControl.className.replace(' control-disabled','')
		// 判断 margin-left 的值
		if (ulStyle.marginLeft === "0px") {
			if (leftControl.className.indexOf('control-disabled') == -1) leftControl.className += " control-disabled";
		} else {
			leftControl.className.replace(' control-disabled','');
		}
		// leftControl.className = ulStyle.marginLeft === "0px" ? leftControl.className.indexOf('control-disabled') == -1 ? leftControl.className + " control-disabled" : leftControl.className : leftControl.className.replace(' control-disabled','');
	};
	rightControl.onclick = function() {	
		ulStyle.marginLeft = updateMargin(ulStyle,-1);		
		// 判断 maargin-left 的值		
		leftControl.className = leftControl.className.replace(' control-disabled','')
		// 判断 maargin-left 的值
		if (ulStyle.marginLeft === "-1240px") {
			if (rightControl.className.indexOf('control-disabled') == -1) rightControl.className += " control-disabled";
		} else {
			rightControl.className.replace(' control-disabled','');
		}
	};
})()

