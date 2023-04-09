jQuery(document).ready(function(){
  $('nav').mouseover(function(){
    $(this).find('.sub').stop().slideDown(500);
  }).mouseout(function(){
    $(this).find('.sub').stop().slideUp(500);
  });

  $('.imgslide a:gt(0)').hide();
  setInterval(function(){
    $('.imgslide a:first-child').fadeOut(500).next('a').fadeIn(500).end().appendTo('.imgslide');
  }, 3000);
  
  $('.notice h4').on('click', function(){
    $(this).addClass('on').next().show();
    $(this).parent('div').siblings('div').children('h4').removeClass('on').next().hide();
  });

  $('.news li:first-child').click(function() {
    $('#modal').addClass('active');
  });
  $('.btn').click(function() {
    $('#modal').removeClass('active');
  })
  
});

// $(document).ready(function() {
//   $('header nav ul.main > li').hover(function(){
//     $('ul.sub').stop().slideDown();
//   }),function(){
//     $('ul.sub').stop().slideUp();
//   }
// })