(function ($) {
   
  
  $(window).load(function(){
      var $container = $('.featuredContainer');
      $container.isotope({
          filter: '*',
          animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
          }
      });
      $('.isotop-classes-tab').on('click', 'a',function(){
          $('.isotop-classes-tab .current').removeClass('current');
          $(this).addClass('current');
          var selector = $(this).attr('data-filter');
          $container.isotope({
              filter: selector,
              animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
              }
           });
           return false;
      });
  });


})(jQuery);
