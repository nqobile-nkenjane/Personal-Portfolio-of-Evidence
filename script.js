// mobile nav toggle
const toggle = document.getElementById('navtoggle');
const navlist = document.getElementById('navlist');
toggle.addEventListener('click', () => navlist.classList.toggle('open'));
navlist.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navlist.classList.remove('open')));

// scrollspy
const links = document.querySelectorAll('.navlink');
const sections = document.querySelectorAll('section[id]');
const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.navlink[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => spy.observe(s));
// =========================================
// DIGITAL COMPETENCY PRESENTATION
// =========================================

const presentationSlides = [
  "images/1.png",
  "images/2.png",
  "images/3.png",
  "images/4.png",
  "images/5.png",
  "images/6.png",
  "images/7.png"
];

let currentSlide = 0;
let slideshowRunning = true;
let slideshowTimer;

const presentationSlide =
  document.getElementById("presentationSlide");

const slideNumber =
  document.getElementById("slideNumber");

const playPauseBtn =
  document.getElementById("playPauseBtn");


function showSlide(index) {

  if (!presentationSlide) {
    return;
  }

  if (index >= presentationSlides.length) {
    currentSlide = 0;
  }

  if (index < 0) {
    currentSlide = presentationSlides.length - 1;
  }

  presentationSlide.style.opacity = "0";

  setTimeout(() => {

    presentationSlide.src =
      presentationSlides[currentSlide];

    slideNumber.textContent =
      currentSlide + 1;

    presentationSlide.style.opacity = "1";

  }, 150);
}


function nextSlide() {

  currentSlide++;

  if (currentSlide >= presentationSlides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}


function previousSlide() {

  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = presentationSlides.length - 1;
  }

  showSlide(currentSlide);
}


function startSlideshow() {

  clearInterval(slideshowTimer);

  slideshowTimer = setInterval(() => {

    nextSlide();

  }, 5000);
}


function stopSlideshow() {

  clearInterval(slideshowTimer);

}


function toggleSlideshow() {

  if (slideshowRunning) {

    stopSlideshow();

    slideshowRunning = false;

    playPauseBtn.textContent = "▶ Play";

  } else {

    startSlideshow();

    slideshowRunning = true;

    playPauseBtn.textContent = "⏸ Pause";

  }

}


// Start automatically

if (presentationSlide) {

  startSlideshow();

}
