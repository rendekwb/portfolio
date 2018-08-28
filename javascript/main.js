function scrollToSection(event) {
  var standartransitionend = (!!window.URL)?'webkitTransitionEnd':'transitionend';
  $('#stripes-container').removeClass('fade-in');
  $('#stripes-container').addClass('fade-out');
  $('#stripes-container').one(standartransitionend, function(e) {
    document.getElementById(event.target.section).scrollIntoView({
      behavior: 'smooth'
    });
  });
}

let aboutBtn = document.getElementById('about-button');
aboutBtn.addEventListener('click', scrollToSection);
aboutBtn.section = 'about-section';
let workBtn = document.getElementById('work-button');
workBtn.addEventListener('click', scrollToSection);
workBtn.section = 'work-section';
let contactBtn = document.getElementById('contact-button');
contactBtn.addEventListener('click', scrollToSection);
contactBtn.section = 'contact-section';

window.addEventListener('touchstart', function onFirstTouch() {
  $('.landing-button').mouseover();
  $('.button-underline').css('transition', 'none').css('width', '100%');
})

window.addEventListener('scroll', function() {
    var landingSection = document.getElementById('landing-section');
    var rect = landingSection.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    
    // // Partially visible elements return true:
    // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    var isVisible = ($(this).scrollTop() === 0);
    if(isVisible) {
      $('#stripes-container').addClass('fade-in');
      $('#stripes-container').removeClass('fade-out');
    } else if(((elemTop + elemBottom) / window.screenY) < 1) {
      $('#stripes-container').addClass('fade-out');
      $('#stripes-container').removeClass('fade-in');
    }
}, true);
