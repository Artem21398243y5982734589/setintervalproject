let valueDisplay = document.getElementById('value');
let startButton = document.getElementById('start');
let count = 0;
let timeoutId = null;

function updateDisplay() {
    valueDisplay.innerText = count;
}

function startTimer() {
    count++;
    updateDisplay();
    timeoutId = setTimeout(startTimer, 1000);
}

function stopTimer() {
    clearTimeout(timeoutId);
    timeoutId = null;
}

function startStopTimer() {
    if (timeoutId) {
        stopTimer();
    } else {
        startTimer();
    }
}

startButton.addEventListener('click', startStopTimer);
