!function($) {
	// 定义公共变量
	var index = 0,
		pause = 1000,
		slideSpeed = 500,
		intervalNum = null,
		slider = $('#J_homeSlider'),
		controlBar = $('.ui-pager.ui-default-pager'),
		popLink = controlBar.find('.ui-pager-link'),
		viewPort = $('.ui-viewport').first(),
		prev = $('.ui-controls-direction').find('.ui-prev').first(),
		next = $('.ui-controls-direction').find('.ui-next').first();

	// 定义自动动画函数
	function slideAnimate(index) {
			// 先把已经显示的图片隐藏
		slider.children().filter(':visible').fadeOut(slideSpeed).css({ zIndex : 0 });
		// 显示需要的图片
		slider.children().eq(index).css('zIndex',51).fadeIn(slideSpeed,function(){$(this).css('zIndex',50);});
		// 焦点控制变化
		controlBar.find('.ui-pager-link').removeClass('active');
		controlBar.find('.ui-pager-link').eq(index).addClass('active');
	};
	// 显示上/下一张
	function swapTo(dirc = 'next',index = 0) {
		if (dirc === 'next') index += 1;
		if (dirc === 'prev') index -= 1;
		if (index < 0) index = 4;
		if (index > 4) index = 0;
		slideAnimate(index);
	};
	// 绑定鼠标滑入暂停
	viewPort.mouseenter(function(){
		stopRun();
	});
	// 绑定鼠标滑出后开始
	viewPort.mouseout(function(){
		autoRun(pause);
	});
	// 绑定左侧后退
	prev.click(function(){
		var defaultIndex = $('.ui-default-pager .ui-pager-link').index($('.ui-default-pager .ui-pager-link.active')[0]);
		defaultIndex -= 1;
		if (defaultIndex < 0) defaultIndex = 4;
		slideAnimate(defaultIndex);
		stopRun();
	});
	// 绑定右侧前进
	next.click(function(){
		var defaultIndex = $('.ui-default-pager .ui-pager-link').index($('.ui-default-pager .ui-pager-link.active')[0]);
		defaultIndex += 1;
		if (defaultIndex > 4) defaultIndex = 0;
		slideAnimate(defaultIndex);
		stopRun();
	});
	// 绑定鼠标点击焦点控制
	popLink.click(function(){
		var btnIndex = popLink.index(this);
		slideAnimate(btnIndex);
		stopRun();
	});
	// 自动运行 
	function autoRun(pause) {
			intervalNum = null;
			intervalNum = setInterval(function(){
				index++;
				if (index > 4) index = 0;
				slideAnimate(index)
			},pause);
		
	};
	// 暂停自动
	function stopRun() {
		if (intervalNum) {
			clearInterval(intervalNum);
		}
	};
	// 启动自动轮播
	autoRun(pause);
}(jQuery)