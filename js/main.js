(function($){        
    $.fn.trunc = function(options) {
        'use strict';  
        
        var count = options || 200;
        var shortText = "";
       
        for( var i = 0; i < this.length; i++) {
		  	var thisText = this[i].innerText; 
		  	(thisText.length >= count) ? shortText = thisText.substring(0, count) + "..." : shortText = thisText;
        	this.eq(i).html("<span class='wrap-text' title='"+ thisText +"'>"+ shortText +"</span>");
		}

        return this;
    }; 
}(jQuery));

