console.log('Your JS is working!')


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
    button.style.color = '#F6CBC2';
    button.style.fontWeight = 'bold';
    button.style.width = '170px';
    button.style.height = '60px';
  });
});