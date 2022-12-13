$(document).ready(function () {
    $('.testimonial-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    
        asNavFor: '.test-active'
      });
      $('.test-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-active',
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });
      $('header nav').smoothScroll(2000);
      $('.scroll-top').smoothScroll(3000);
      $(window).scroll(function () {
          var top = $(window).scrollTop();
          if (top > 300) {
              $('.scroll-top').fadeIn(500);
          } else {
              $('.scroll-top').fadeOut(500);
          }
      });
      $("body").niceScroll({
        scrollspeed:100
      });
      
        $('.mennunav').onePageNav({
          currentClass: 'active'
        });
  $('.numscroller').numscroller();
      });
       
    
 
$(window).scroll(function(){
  if ($(window).scrollTop() >= 100) {
      $('.header-section').addClass('fixed-header');
     
  }
  else {
      $('.header-section').removeClass('fixed-header');
 
  }
});
