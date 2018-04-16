(function ($) {
	jQuery.fn.menuOverlay = function (options) {
		options = $.extend({
			'html-close': 'x',
			'origin': 'bottom'
		}, options);

		
		var make = function () {
			$(this).wrap('<div class="menu-overlay"><div class="menu-overlay--wrap"><div class="menu-overlay--content"><div class="content--inside"></div></div></div></div>');
			let $mOverlay = $(this).parents('.menu-overlay'),
				$mOverlayWrap = $mOverlay.find('.menu-overlay--wrap'),
				$mOpen = $('#' + options['id-btn']),
				$mClose = $('.menu-overlay--close');
			
			$mClose = $mOverlayWrap.append('<div class="menu-overlay--close">' + options['html-close'] +'</div>');
			$mOverlayWrap.addClass(options['origin']);
			options['background'] ? $mOverlayWrap.css('background', options['background']) : '';

			$mOpen.click(function() {
				$mOpen.toggleClass('active', true);
				$mClose.toggleClass('active', true);
				$mOverlay.toggleClass('open', true);
			});

			$mClose.click(function() {
				$mOpen.toggleClass('active', false);
				$mClose.toggleClass('active', false);
				$mOverlay.toggleClass('open', false);
			});
		};

		return this.each(make);
	};
})(jQuery);