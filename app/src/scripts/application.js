$(function(){

  $('.actionPanel').on({
    click: function (e) {
      e.preventDefault();
      var panel = '.' + $(this).data('panel');
      $(panel).slideToggle('slow');
      $('html, body').animate({
          scrollTop: $( "#" + $(this).data('panel')).offset().top
      }, 1500);
      return false;

    }
  })
  $('li a').bind('click', function(event) {
    scrollTo($(this).attr('href'));
  });

  var scrollTo = function(elementID){

    $('html, body').animate({
        scrollTop: $(elementID).offset().top
    }, 1500);
    return false;
  }

});
