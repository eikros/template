// Block scroll events from escaping the iframe, and limit
// the height of the header.

(function(undefined){
  
  var html = jQuery(document.documentElement),
      body = jQuery(document.body),
      node;
  
  jQuery(document)
  
  // Animate scroll top the scroll position of target.
  .delegate('a[href^="#"]', 'click touchstart', function(e) {
    var href, elem, offset, scrollTop, obj;
    
    // This link has already been handled, I fear.
    if (e.isDefaultPrevented()) { return; }
    
    href = jQuery(e.target).attr('href');
    elem = jQuery(href);
    
    if (elem.length === 0) { return; }
    
    e.preventDefault();
    
    offset = elem.offset();
    
    // Find scrollTop, in the process caching where scrollTop comes
    // from.
    scrollTop = ((node = html, node[0].scrollTop) ||
                 (node = body, node[0].scrollTop) ||
                 (n = 0));
    
    obj = {'scrollTop': offset.top - 48};
    
    if (node) {
      node.animate(obj, 400, 'ease-out');
    }
    else {
      html.animate(obj, 400, 'ease-out');
      body.animate(obj, 400, 'ease-out');
    }
  })
  
	.ready(function() {
		
		//jQuery('.display').each(function() {
		//	var elem = jQuery(this),
		//	    code = jQuery('<code class="code_col col"></code>');
		//	
		//	html = jQuery.trim(elem.html());
		//	
		//	console.log(html);
		//	
		//	code.text(html);
		//	
		//	elem.after(code);
		//});
		
		// Highlight contents of <code> tags 
		prettyPrint();

		// Prevent scroll of the window after the nav scrolls to it's
		// top or bottom limit.

		var nav = jQuery('#api_nav');
		
		function preventScrollUp(e) {
			var delta = e.wheelDelta !== undefined ? -e.wheelDelta : e.detail;
			
			if (delta < 0) {
				// We're trying to scroll up. Stop it.
				e.preventDefault();
			}
		}

		function preventScrollDown(e) {
			var delta = e.wheelDelta !== undefined ? -e.wheelDelta : e.detail;
			
			if (delta > 0) {
				// We're trying to scroll down. Stop it.
				e.preventDefault();
			}
		}

		function unbindPreventScrollUp(e) {
			var elem = e.data;
			
			elem
			.unbind('mousewheel DOMMouseScroll', preventScrollUp)
			.unbind('scroll', unbindPreventScrollUp);
		}
		
		function unbindPreventScrollDown(e) {
			var elem = e.data;
			
			elem
			.unbind('mousewheel DOMMouseScroll', preventScrollDown)
			.unbind('scroll', unbindPreventScrollDown);
		}

		nav
		.bind('scrolltop', function(e) {
			nav
			.bind('mousewheel DOMMouseScroll', preventScrollUp)
			.bind('scroll', nav, unbindPreventScrollUp);
		})
		.bind('scrollbottom', function(e) {
			nav
			.bind('mousewheel DOMMouseScroll', preventScrollDown)
			.bind('scroll', nav, unbindPreventScrollDown);
		})
		.bind('mousewheel DOMMouseScroll', function(e) {
			// Handle case where no scrollbar is present, so no scroll event
			// is heard and the window scrolls - unless we do something.
			if (e.currentTarget.clientHeight === e.currentTarget.scrollHeight) {
				e.preventDefault();
			}
		})
		.bind('mousewheel DOMMouseScroll', function unbind(e) {
			// It may be that this elem has just lost it's scrollbars and
			// some prevent function has been left bound.
			if (e.currentTarget.clientHeight === e.currentTarget.scrollHeight) {
				nav
				.unbind('mousewheel DOMMouseScroll', preventScrollUp)
				.unbind('mousewheel DOMMouseScroll', preventScrollDown)
				.unbind('mousewheel DOMMouseScroll', unbind);
			}
		});
	});
})();