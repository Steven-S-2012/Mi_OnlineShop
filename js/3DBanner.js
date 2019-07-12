jQuery(document).ready(function() {
	var container = $('#J_homePromo');
	var banners = container.find('img');
	banners.on({
		mousemove: function(e) {
			var spinnerRate = 20;
			var offset = $(this).offset();
	
			var offsetX = e.pageX - offset.left;
			var offsetY = e.pageY - offset.top;
	
			var midX = $(this).outerWidth() / 2;
			var midY = $(this).outerHeight() / 2;
	
			var gapX = offsetX - midX;
			var gapY = offsetY - midY;
	
			var radioX = (offsetX - midX) / midX;
			var radioY = (offsetY - midY) / midY;
	
			$(this).css({
				transform: 'rotateX(' + spinnerRate * -radioY + 'deg) ' + 'rotateY(' + spinnerRate * radioX + 'deg)'
			})
		},
		mouseleave: function() {
			$(this).css({
				transform: ''
			})
		},
		click: function(){alert('ok')},
	});
})