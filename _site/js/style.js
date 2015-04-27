$("#fmenu").hide();
$(document).ready(function(){
 
 $(".menu").click(function(){

    $("#fmenu").animate({height:'toggle'},600,'easeOutBounce');

  });
 
  $("#close i").click(function(){

    $("#fmenu").animate({height:'toggle'},600,'easeOutSine');

  });
  
  $("i.back").click(function(){
    $('html, body').animate({scrollTop : 0},400);
    return false;
  });
 
  });