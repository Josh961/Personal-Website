var menuBtn = document.getElementById('menu-btn');
var mobileMenu = document.getElementById('mobile-menu');
var close = document.getElementsByClassName('close')[0];

menuBtn.addEventListener('click', function() {
  mobileMenu.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function() {
  mobileMenu.style.display = 'none';
  document.body.style.overflow = 'auto';
});