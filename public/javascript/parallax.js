$(document).ready(function() {

  var $window =  $(window);   
  $window.scroll(function(){
    parallax($('.parallax'));
  });  

  function parallax(id) {      
    var yPos = ($window.scrollTop()/1.5); /*id.data('speed')*/

    var coords = yPos+'px';
    id.css({bottom: coords, opacity: 1-($window.scrollTop()/700) });
  }

});


/*$(document).ready(function() {
  var $artHeaderInner = $('.middle');
  var $artHeader = $('.art-header');  
  var windowScroll;

  $(window).resize(function() {
    slidingTitle();
  });

  $(window).scroll(function() {
    slidingTitle();
  }); 

  function slidingTitle() {
    windowScroll = $(this).scrollTop();
    $artHeaderInner.css({
      'top' : 60+(windowScroll/1.5),
      'opacity' : 1-(windowScroll/350)
    });
    $artHeader.css({
      'background-position' : 'center ' + (windowScroll/2)+"px"
    });

    var headerRGB = 'rgba(0,0,0,' + (windowScroll / 350) + ')';
    $('header').css({'background-color':headerRGB});
  }
});*/

/*

function parallax(id, isBg) {
    
    var yPos = ($window.scrollTop()/id.data('speed'));

    if (!isBg) {
        var coords = yPos+'px';
        id.css({top: coords});
    }
    else{
        var coords = '50% '+(-yPos)+'px';
        id.css({'background-position': coords});
    }
    
}

    $window.scroll(function(){
        parallax($('#header'), true);
        parallax($('#header article'), false);
    });

 var $window =  $(window);   

*/