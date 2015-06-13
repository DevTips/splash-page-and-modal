$(function() {

  $('.cta').click(function(){
    $('.overlay').addClass('is-open');
    return false;
  });

  $('.close-btn').click(function(){
    $('.overlay').removeClass('is-open')
  });

});
