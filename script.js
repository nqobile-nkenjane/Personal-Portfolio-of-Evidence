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
