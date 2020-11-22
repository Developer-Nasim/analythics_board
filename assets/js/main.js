(function($) {
  "use strict";

  $(".menus").click(function(){
    $(".site-bar").toggleClass('active-site-bar')
  })  
  $(function(){
    $("#bars li .bar").each(function(key, bar){
        var percentage = $(this).data('percentage');

        $(this).animate({
        'height':percentage+'%'
        }, 1000);
    })
})
})(jQuery);
