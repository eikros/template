jQuery(document).delegate('.js', 'click', function(e) {
	var elem = jQuery(e.currentTarget),
			html = elem.html(),
			js = html.replace(/<\/?[^>]+>/gi, '').replace(/&lt;/, '<').replace(/&gt;/, '>');
	
	eval(js);
});