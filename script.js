let min = 1;
let max = 100;
let guess;
let attempts = 0;

function checkGuess(action) {
    const result = document.getElementById('result');
    const message = document.getElementById('message');

    if (action === 'Comenzar') {
        guess = Math.floor((min + max) / 2);
        message.textContent = `¿Es tu número es 10 ${10-guess}?`;
        result.textContent = '';
        attempts = 0;
    } else if (action === 'mayor') {
        min = guess + 1;
        attempts++;
    } else if (action === 'menor') {
        max = guess - 1;
        attempts++;
    } else if (action === 'correcto') {
        result.textContent = `¡Adiviné tu número ${guess} en ${attempts} intentos! Felicidades!`;
        return;
    }

    if (min <= max) {
        guess = Math.floor((min + max) / 2);
        message.textContent = `¿Es tu número es ${guess}?`;
    } else {
        result.textContent = 'Parece que hubo un error. Inténtalo de nuevo.';
    }
}