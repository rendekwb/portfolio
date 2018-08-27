function scrollToSection(e) {
  document.getElementById(e.target.section).scrollIntoView({
    behavior: 'smooth'
  });
}

let aboutBtn = document.getElementById('about-button')
aboutBtn.addEventListener('click', scrollToSection);
aboutBtn.section = 'about-section';
let workBtn = document.getElementById('work-button')
workBtn.addEventListener('click', scrollToSection);
workBtn.section = 'work-section';
let contactBtn = document.getElementById('contact-button');
contactBtn.addEventListener('click', scrollToSection);
contactBtn.section = 'contact-section';
