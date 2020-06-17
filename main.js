const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
const panel = document.querySelector('.time div');

let time = 0;
let change = false;
let idI;
const span = document.createElement('span');
panel.appendChild(span);


const timer = () => {
    if (!change) {
        change = !change;
        btnStart.textContent = 'PAUSE';
        idI = setInterval(startTimer, 10);
    } else {
        change = !change;
        btnStart.textContent = 'START';
        clearInterval(idI);
    }
}

const startTimer = () => {
    time++;
    if (time <= 5999) {
        panel.textContent = (time / 100).toFixed(2);
    } else {
        let seconds = ((time / 100) % 60).toFixed(2);
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        let minutes = Math.floor((time / (100 * 60)));
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        let hours = Math.floor((time / (100 * 60 * 60)));
        hours = minutes < 10 ? `0${hours}` : hours;
        panel.textContent = `${hours}:${minutes}:${seconds}`;
    }
}


const resetTimer = () => {
    time = 0;
    panel.textContent = '0.00';
    change = false;
    btnStart.textContent = 'START';
    clearInterval(idI);
}

btnStart.addEventListener('click', timer);
btnReset.addEventListener('click', resetTimer);