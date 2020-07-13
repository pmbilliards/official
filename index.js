$(function() {
  $('.hov1').hover(function() {
    $('.n1').css('color', '#0056b3');
  }, function() {
    // on mouseout, reset the background colour
    $('.n1').css('color', '#f1d1d1');
  });
});

$(function() {
  $('.prods').hover(function() {
    $('button').addClass(" animate__jello  animate__infinite");
  }, function(){
    $('button').removeClass(" animate__jello  animate__infinite");
  });
});

$('.slide').carousel({
    pause: "false"
});
// var shiftWindow = function() { scrollBy(0, -70) };
// if (location.hash) shiftWindow();
// window.addEventListener("hashchange", shiftWindow);
