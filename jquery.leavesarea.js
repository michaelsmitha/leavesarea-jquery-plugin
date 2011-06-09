/*
 * leavesArea for jQuery
 *
 * Copyright (c) Michael Smith <michaelsmith.a@gmail.com>
 * Licensed under the MIT license.
 *
 * Date: June 8, 2011
 * Version: 1.0.0
 *
 *  use: $('covered_element').leavesArea(function(){alert('!');});
 *  or : $('covered_element').leavesArea(); 
 *       $('covered_element').bind('leavesArea',function(){alert('!');});
 */

(function($) {
  $.fn.leavesArea = function(callback) {
    var self = $(this);
    var entered_elem = false;
    $(document).bind('mousemove', function(e) {
      var x = e.pageX,
        y = e.pageY,
        top = self.offset().top,
        left = self.offset().left,
        right = self.offset().left + self.width(),
        bottom = self.offset().top + self.height();
      if (!entered_elem && x > left && x < right && y > top && y < bottom) {
        entered_elem = true;
      }
      else {
        if ((y < top || x < left || right < x|| bottom < y) && entered_elem) {
          entered_elem = false;
          self.trigger('leavesArea');
          if (callback)
            callback();
        }
      }
    });
    return this;
  };
})(jQuery);