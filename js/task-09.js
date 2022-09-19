const body = document.querySelector('body');
const changeBtn = document.querySelector('.change-color');
const color = document.querySelector('.color');

changeBtn.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = body.style.backgroundColor;
}
