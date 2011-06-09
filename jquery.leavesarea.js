(function( $ ) {
  $.fn.leavesArea = function(callback) {
    var self = $(this)
    $(document).bind('mousemove', function(e) {
      var up_mouse = self.offset().top > e.pageY,
      left_mouse = self.offset().left > e.pageX,
      right_mouse = self.offset().left + self.width() < e.pageX,
      down_mouse = self.offset().top + self.height() < e.pageY;
      if (up_mouse || left_mouse || right_mouse || down_mouse) {
        self.trigger('left-area');
        if (callback)
          callback();
      }
    });
    return this;
  };
})( jQuery );