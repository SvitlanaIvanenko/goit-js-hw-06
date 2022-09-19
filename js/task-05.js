const inputEl = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
    if (inputEl.value.length === 0) {
       return userName.textContent = 'Anonymous';
    }
    userName.textContent = inputEl.value;
});