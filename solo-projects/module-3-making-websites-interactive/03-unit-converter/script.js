const input = document.querySelector('input');
const button = document.querySelector('button');

const paragraphs = document.querySelectorAll('p');

function lengthConverter(p) {
    const meterToFeet = (input.value * 3.281).toFixed(3);
    const feetToMeter = (input.value / 3.281).toFixed(3);

    p.innerText = `${input.value} meters = ${meterToFeet} feet | ${input.value} feet = ${feetToMeter} meters`;
}

function volumeConverter(p) {
    const litersToGallons = (input.value * 0.264).toFixed(3);
    const gallonsToLiters = (input.value / 0.264).toFixed(3);

    p.innerText = `${input.value} liters = ${litersToGallons} gallons | ${input.value} gallons = ${gallonsToLiters} liters`;
}

function massConverter(p) {
    const kilogramsToPounds = (input.value * 2.204).toFixed(3);
    const poundsToKilograms = (input.value / 2.204).toFixed(3);

    p.innerText = `${input.value} kilograms = ${kilogramsToPounds} pounds | ${input.value} pounds = ${poundsToKilograms} kilograms`;
}

function unitConverter() {
    paragraphs.forEach((p) => {
        if (p.parentElement.id === 'length') {
            lengthConverter(p);
        } else if (p.parentElement.id === 'volume') {
            volumeConverter(p);
        } else if (p.parentElement.id === 'mass') {
            massConverter(p);
        } else {
        }
    });
}

button.addEventListener('click', unitConverter);
