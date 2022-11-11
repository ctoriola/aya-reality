$(document).ready(function() {

    /* Hide mobile menu after clicking on a link
      -----------------------------------------------*/
      $('.navbar-collapse a').click(function(){
          $(".navbar-collapse").collapse('hide');
      });
  
  
    /*  smoothscroll
    ----------------------------------------------*/
     $(function() {
          $('#home a, .navbar-default a').bind('click', function(event) {
              var $anchor = $(this);
              $('html, body').stop().animate({
                  scrollTop: $($anchor.attr('href')).offset().top - 49
              }, 1000);
              event.preventDefault();
          });
      });  
    })