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
// CANVA PRESENTATION
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


function openPresentation() {

  document.getElementById("presentationModal").style.display = "flex";

  currentSlide = 0;

  showSlide();

}


function closePresentation() {

  document.getElementById("presentationModal").style.display = "none";

}


function showSlide() {

  document.getElementById("presentationSlide").src =
    presentationSlides[currentSlide];

  document.getElementById("slideNumber").textContent =
    (currentSlide + 1) + " / 7";

}


function nextSlide() {

  if (currentSlide < presentationSlides.length - 1) {

    currentSlide++;

    showSlide();

  }

}


function previousSlide() {

  if (currentSlide > 0) {

    currentSlide--;

    showSlide();

  }

}function openCertificates() {
  document.getElementById("certificateModal").style.display = "flex";
}
function closeCertificates() {
  document.getElementById("certificateModal").style.display = "none";
}
