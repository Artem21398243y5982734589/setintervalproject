
const hourB = document.getElementById('hourB');
const minB = document.getElementById('minB');
const secB = document.getElementById('secB');
const hourBD = document.getElementById('hourBD');
const minBD = document.getElementById('minBD');
const secBD = document.getElementById('secBD');

let sec = 59;
let min = 59;
let hours = 24;

secB.addEventListener('click', secBUP);
secBD.addEventListener('click', secBDOWN);
minB.addEventListener('click', minBUP);
minBD.addEventListener('click', minBDOWN);
hourB.addEventListener('click', hourBUP);
hourBD.addEventListener('click', hourBDOWN);

function secBUP() {
    if (sec > 0) {
        sec--;
    } else {
        sec = 59;
    }
    document.getElementById('sec').innerText = sec;
}

function secBDOWN() {
    if (sec < 59) {
        sec++;
    } else {
        sec = 0;
    }
    document.getElementById('sec').innerText = sec;
}

function minBUP() {
    if (min > 0) {
        min--;
    } else {
        min = 59;
    }
    document.getElementById('min').innerText = min;
}

function minBDOWN() {
    if (min < 59) {
        min++;
    } else {
        min = 0;
    }
    document.getElementById('min').innerText = min;
}

function hourBUP() {
    if (hours > 0) {
        hours--;
    } else {
        hours = 24;
    }
    document.getElementById('hours').innerText = hours;
}

function hourBDOWN() {
    if (hours < 24) {
        hours++;
    } else {
        hours = 0;
    }
    document.getElementById('hours').innerText = hours;
}

function timerStart() {
    setInterval(() => {
        if (sec > 0) {
            sec--;
        } else if (min > 0) {
            min--;
            sec = 59;
        } else if (hours > 0) {
            hours--;
            min = 59;
            sec = 59;
        }

        document.getElementById('sec').innerText = sec;
        document.getElementById('min').innerText = min;
        document.getElementById('hours').innerText = hours;
    }, 1000);
}

const btnStart = document.getElementById('startBtn');
btnStart.addEventListener('click', timerStart);
