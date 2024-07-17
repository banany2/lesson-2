let startTime = 300;
let timerInterval = null
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = formatTime(startTime);

    if (startTime > 0) {
        startTime--;
    } else {
        clearInterval(timerInterval);
    }
}

function startTimer() {
    if (timerInterval !== null) {
        return;
    }
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

document.getElementById('startBtn').addEventListener('click', startTimer);