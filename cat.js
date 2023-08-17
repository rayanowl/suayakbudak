const cat = document.querySelector('.cat');

cat.addEventListener('click', () => {
  cat.classList.remove('jump');
  void cat.offsetWidth; // force reflow
  cat.classList.add('jump');
  cat.style.transitionTimingFunction = 'cubic-bezier(0.2, 0.8, 0.2, 1)';
});