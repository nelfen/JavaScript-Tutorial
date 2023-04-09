jQuery(document).ready(function() {
  $('nav').mouseover(function() {
    $(this).find('.sub').stop().slideDown(500);
  }).mouseout(function() {
    $(this).find('.sub').stop().slideUp(500);
  })

  $('.imgslide ul.slide_all>li').eq(0).siblings().css("left", "-1200px");
  var slideI=0;
  setInterval(function(){
    if(slideI<2){
      slideI++;
    } else{
      slideI=0;
    }    console.log(slideI);
    $('.imgslide ul.slide_all>li').eq(slideI).siblings().animate({"left":"-1200px"}, 500);
    $('.imgslide ul.slide_all>li').eq(slideI).animate({"left":"0"}, 500);
  },3000);

});