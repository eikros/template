// Fallback support for jQuery.fn.addTransitionClass. Also can
// be used in cases where low file size is a proirity.

(function(jQuery) {
	jQuery.fn.addTransitionClass = function(classes, callback) {
		jQuery.fn.addClass.call(this, classes);
		if (callback) callback.call(this);
	};
	
	jQuery.fn.removeTransitionClass = function(classes, callback) {
		jQuery.fn.removeClass.call(this, classes);
		if (callback) callback.call(this);
	};
	
	jQuery.fn.transition = function(fn, callback) {
		fn.apply(this);
		if (callback) callback.call(this);
	};
})(jQuery);