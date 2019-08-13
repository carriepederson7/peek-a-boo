$(document).ready(function() {



  $(".clickable").click(function() {
    $("#initially-hidden").toggle();
    $("#initially-showing").toggle();
  });




  $(".clickable2").click(function() {
    $("#fadeIn").fadeToggle(4000);
    $("#fadeOut").fadeToggle(4000);
  });


});
