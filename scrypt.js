const number = document.getElementById('input');


const farenheit = document.getElementById('toCelsius');
const celcius = document.getElementById('toFarenheit');

const result = document.getElementById('result');

let temp;

function convert() {
    if (farenheit.checked) {
        temp = Number(number.value);
        temp = temp* 905 +32;
        result.textContent = temp + '°F';
        console.log(temp);
    } else if (celcius.checked) {
        temp = Number(number.value);
        temp = (temp - 32) / 1.8;
        result.textContent = temp + '°C';
        
    }
    else {
        result.textContent = 'Please select an option';
    }

}
