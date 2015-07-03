$(function(){

  $('.actionPanel').on({
    click: function (e) {
      e.preventDefault();
      var panel = '.' + $(this).data('panel');
      $(panel).slideToggle('slow');
    }
  })
  $('li a').bind('click', function(event) {
      var $anchor = $(this);
      event.preventDefault();

      console.log( $($($anchor).attr('href')).offset().top);
/*
      $('html, body').stop().animate({
          scrollTop: $($($anchor).attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
*/
  });
});
