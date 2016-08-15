(function($){        
    $.fn.trunc = function(options) {
        'use strict';  
        
        var count = options || 200;
        var shortText = "";
        console.log(count);
       
        for( var i = 0; i < this.length; i++) {
        	console.log(this);
		  	var thisText = this[i].innerText; 
		  	(thisText.length >= count) ? shortText = thisText.substring(0, count) + "..." : shortText = thisText;
        	this.eq(i).html("<span style='background: yellow;cursor: pointer' title='"+ thisText +"'>"+ shortText +"</span>");
		}

        return this;
    }; 
}(jQuery));

