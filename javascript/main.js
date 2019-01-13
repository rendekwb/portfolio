$('#to-top-button').hide();
document.getElementById('to-top-button').addEventListener('click', function() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

var scrollHandling = {
    allow: true,
    reallow: function() {
        scrollHandling.allow = true;
    },
    delay: 0 //(milliseconds) adjust to the highest acceptable value
};

window.addEventListener('scroll', function() {
  if(scrollHandling.allow) {
    var headerElem = document.getElementsByClassName('text-header')[0];
    var footerElem = document.querySelector('footer');
    var headerInView = isScrolledIntoView(headerElem);
    var button = $('#to-top-button');
    if(headerInView) { button.fadeOut(); } else { button.fadeIn(); }
    scrollHandling.allow = false;
    setTimeout(scrollHandling.reallow, scrollHandling.delay);
  }
});

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$('#hamburger-icon').click(function() {
  $('#slide-out-menu').addClass('slide-in');
});

$('#menu-close-icon').click(function() {
  $('#slide-out-menu').removeClass('slide-in');
});
