const title = document.querySelector('.title');

const leaf1 = document.querySelector('.leaf1');
const leaf2 = document.querySelector('.leaf2');

const mount1 = document.querySelector('.mount1');
const mount2 = document.querySelector('.mount2');
const bush2 = document.querySelector('.bush2');

document.addEventListener('scroll', function(){
    let scrollPosition = window.scrollY;
    title.style.marginTop = scrollPosition * 1.1 + 'px';

    leaf1.style.marginLeft = -scrollPosition * 0.25 + 'px';
    leaf2.style.marginLeft = scrollPosition * 0.25 + 'px';

    bush2.style.marginBottom = -scrollPosition * 0.5 + 'px';
    mount1.style.marginBottom = -scrollPosition * 0.5 + 'px';
    mount2.style.marginBottom = -scrollPosition * 0.7 + 'px';
})



const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show button after scrolling 300px
window.addEventListener('scroll', () => {
  if (window.scrollY > 350) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Smooth scroll to top when clicked
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


//fade in the scroll to top button
const faders = document.querySelectorAll('.fade-in-section');

const fadeInOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;

  faders.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll); // trigger on load too

