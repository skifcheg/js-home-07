(function ($) {    
    $.fn.trunc = function(options) {
        var settings = $.extend({
            count: 200,
            afterText: "..."
        }, options);
        
        var thisText = this[0].innerText;
        
        if(thisText.length < settings.count){
           
        } 
        
        return this;
    };    
}(jQuery));

