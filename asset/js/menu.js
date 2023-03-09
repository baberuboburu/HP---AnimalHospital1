var menuButton = document.getElementById('menu__btn');
var menuButtonCeoss = document.getElementById('menu__btn__cross');
var menu = document.getElementById('menu');

menuButton.addEventListener('click', function() {
  menu.style.display = 'block';
});

menuButtonCeoss.addEventListener('click', function() {
  menu.style.display = 'none';
});