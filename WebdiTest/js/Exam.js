jQuery(document).ready(function() {
  $('.navi>li').mouseover(function() {
    $(this).find('.submenu').stop().slideDown(500);
  }).mouseout(function() {
    $(this).find('.submenu').stop().slideUp(500);
  });

  $('.imgslide a:gt(0)').hide();
  setInterval(function() {
    $('.imgslide a:first-child').fadeOut(500).next('a').fadeIn(500).end().appendTo('.imgslide');
  }, 5000);

  $('.notice li:first-child').click(function() {
    $('#modal').addClass('active');
  });
  $('.btn').click(function() {
    $('#modal').removeClass('active');
  });
});