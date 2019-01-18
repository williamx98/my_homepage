$(document).ready(function(){
    $("body").hide(0).delay(250).fadeIn(500)
    $(window).scroll(function() {

        if ($(this).scrollTop()>200)
         {
            $('.mouse').fadeOut(1000);
         }
        else
         {
            $('.mouse').fadeIn(1000);
         }
     });
});