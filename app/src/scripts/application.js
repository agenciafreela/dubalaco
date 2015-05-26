$(function(){

  $('.actionPanel').on({
    click: function (e) {
      e.preventDefault();
      var panel = '.' + $(this).data('panel');
      $(panel).slideToggle('slow');
    }
  })

});
