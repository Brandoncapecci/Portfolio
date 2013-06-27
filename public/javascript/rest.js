$(function() {

  var dashboard = "/dashboard";

  $('.post').click(function() {
    $.ajax({
      type: 'POST',
      url: '/new',
      data:  { title: $('#title').val(), body: $('#body').val() },
      success: function(data) {
        if (data == "true") {
          window.location = dashboard;
        }
      }
    });
  });


  $('.update').click(function() {
    var id = $(this).attr("data-id");
    $.ajax({
      type: 'POST',
      url: '/edit/'+id,
      data:  { title: $('#title').val(), body: $('#body').val() },
      success: function() {
        if (data == "true") {
          window.location = dashboard;
        }      
      }
    });
  });
  
  $('.delete').click(function() {
    var id = $(this).attr("data-id");
    $.ajax({
      type: 'POST',
      url: '/delete/'+id,
      success: function(data) {
        if (data == "true") {
          window.location = dashboard;
        }
      }
    });
  });

});