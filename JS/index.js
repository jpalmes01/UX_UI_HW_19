
const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
  button.style.transition = 'all 0.3s ease-in-out';

  button.addEventListener('mouseover', function() {
    button.style.background = 'linear-gradient(to top, #FAC3C2, #C0D2E1, #CEE1F2)';
    button.style.color = '#DE7875';
    button.style.fontWeight = 'bold';
    button.style.width = '190px';
    button.style.height = '70px';
  });

  button.addEventListener('mouseout', function() {
    button.style.background = '#DE7875';
    button.style.color = '#571A0D';
    button.style.fontWeight = 'bold';
    button.style.width = '170px';
    button.style.height = '60px';
  });
});

$('.hero-button button').click(function() {
  $('html, body').animate({
    scrollTop: $('div.footer').offset().top
  }, 1000);
});

$('li.inline-block:contains("Contact")').click(function() {
  $('html, body').animate({
    scrollTop: $('div.footer').offset().top 
  }, 1000);
});

$('.bounceMe').click(function() {
  $('html, body').animate({
    scrollTop: $('.grid-item1').offset().top - $('.bounceMe').outerHeight()
  }, 1000);
});

$(window).scroll(function() {
  var top_of_element = $('.grid-item1').offset().top;
  var bottom_of_element = $('.grid-item1').offset().top + $('.grid-item1').outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
    $('.grid-item1').addClass('in-view');
  } else {
    $('.grid-item1').removeClass('in-view');
  }
});

$(window).scroll(function() {
  var top_of_element = $('.grid-item2').offset().top;
  var bottom_of_element = $('.grid-item2').offset().top + $('.grid-item2').outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
    $('.grid-item2').addClass('in-view');
  } else {
    $('.grid-item2').removeClass('in-view');
  }
});

$(window).scroll(function() {
  var top_of_element = $('.grid-item3').offset().top;
  var bottom_of_element = $('.grid-item3').offset().top + $('.grid-item3').outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
    $('.grid-item3').addClass('in-view');
  } else {
    $('.grid-item3').removeClass('in-view');
  }
});
