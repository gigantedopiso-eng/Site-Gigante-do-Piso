function updateCompare(input){
  input.parentElement.style.setProperty('--reveal', input.value + '%');
}

// header scroll state
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// mobile drawer
const drawer = document.getElementById('mobileDrawer');
const burgerBtn = document.getElementById('burgerBtn');
const closeDrawer = document.getElementById('closeDrawer');
burgerBtn.addEventListener('click', () => {
  drawer.classList.add('open');
  burgerBtn.setAttribute('aria-expanded','true');
});
closeDrawer.addEventListener('click', () => {
  drawer.classList.remove('open');
  burgerBtn.setAttribute('aria-expanded','false');
});
drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  drawer.classList.remove('open');
  burgerBtn.setAttribute('aria-expanded','false');
}));

document.getElementById('email-link').addEventListener('click', function(e) {
  e.preventDefault();
  const user = 'gigantedopiso';
  const domain = 'gmail.com';
  this.href = 'mailto:' + user + '@' + domain;
  this.textContent = user + '@' + domain;
});

document.getElementById('year').textContent = new Date().getFullYear();
