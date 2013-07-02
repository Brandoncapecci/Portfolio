$(function() {

  $('a[href=#target]').click(function() {
    console.log("test");
    var target = $('a[name=target]');
    if (target.length)
    {
        var top = target.offset().top;
        $('html,body').animate({scrollTop: top}, 1000);
        return false;
    }
  });

});