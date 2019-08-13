$(document).ready(function() {

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $(".clickable").click(function() {
    $("#initially-hidden").toggle();
    $("#initially-showing").toggle();
  });

  $(".clickable2").click(function() {
    $("#fadeIn").fadeToggle(4000);
    $("#fadeOut").fadeToggle(4000);
  });


});
