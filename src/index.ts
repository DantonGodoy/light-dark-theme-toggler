// import Ryu from './images/ryu-wallpaper';
import './styles';

const toggleBtn = document.querySelector('.theme-toggle-button'),
      sunMoonContainer = document.querySelector('.sun-moon-container');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
  sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)
});