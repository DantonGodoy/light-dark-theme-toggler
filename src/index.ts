import './styles';

const toggleBtn = document.querySelector('.theme-toggle-button')! as HTMLElement,
      sunMoonContainer = document.querySelector('.sun-moon-container')! as HTMLElement,
      currentYear = document.querySelector('#currentYear')! as HTMLElement;

/**
 * Applies toggle theme on button click by applying the .dark class to the body element.
 * Gets property --rotation value from the sun and moon container computed style and applies a positive 180deg value so the sun and moon always spins on a positive direction.
 */
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
  sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)
});

/**
 * Updates footer current year.
 */
const updateYear = () => {
  const date: Date = new Date();
  currentYear.textContent = date.getFullYear();
};

updateYear();