// JavaScript Document

jQuery(document).ready(function ($) {
 jQuery(window).scroll(function(){
  // get the height of #wrap
  var h = jQuery('.port-works').height();
  var y = jQuery(window).scrollTop();
  if( y > (h*.08)  ){
   // if we are show keyboardTips
   jQuery("#menu-compact").fadeIn("slow");
  } else {
   jQuery('#menu-compact').fadeOut('slow');
  }
 });
 
 $(".joinus").mouseover(function(e) {
    if(e.target == this) {
        $(".light").addClass("on");
    }
}).mouseout(function(e) {
    if(e.target == this) {
        $(".light").removeClass('on');
    }
});
 
 
 
moon = $(".joinus").fadeTo(0, 0);
$(window).scroll(function(d,h) {
    moon.each(function(i) {
        a = $(this).offset().top + $(this).height();
        b = $(window).scrollTop() + $(window).height();
        var that = $(this);
        if (a < b && true != $(this).data('faded')) {
            $(this).data('faded', true).fadeTo(2000,1);
        }
    });
});
 
 
})



