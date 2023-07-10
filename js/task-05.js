const input = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', () => {
    nameOutput.textContent = input.value;
    if(input.value.trim() == '') {
        nameOutput.te = 'ds'
    }
})
