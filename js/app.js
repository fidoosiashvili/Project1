$('.menu-toggle').click(function() {
  
  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');

    var src = ($(this).attr('src') === 'images/auto_logo_red.png')
            ? 'images/auto_logo.png'
            : 'images/auto_logo_red.png';
         $(this).attr('src', src)

         $('#main_logo').attr('src',src);

   $('.left_control').toggleClass('hide');  
   $('.right_control').toggleClass('hide');      

})