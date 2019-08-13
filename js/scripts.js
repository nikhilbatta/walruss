$(document).ready(function(){
  $(".clickable").click(function(){
    $("#initial-showing").slideToggle();
    $("#initial-hidden").toggle();
    //$("#initial-showing").slideToggle();
  });
});
