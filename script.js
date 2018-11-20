$(document).ready(function(){
    $("body").hide(0).delay(250).fadeIn(500)
    $(window).scroll(function() {

        if ($(this).scrollTop()>200)
         {
            $('#scroll-indicator').fadeOut(1000);
         }
        else
         {
            $('#scroll-indicator').fadeIn(1000);
         }
     });
});

$(function() {
  $('#scroll-indicator').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 750, 'swing');
  });

  $(function() {
  $('#contact-button').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 750, 'swing');
  });
});

  $(function() {
  $('#resume-button').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 750, 'swing');
  });
});
});