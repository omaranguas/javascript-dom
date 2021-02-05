const d = document;

export function digitalClock(clock, startBtn, stopBtn) {
    let timerClock;
    d.addEventListener('click', (e) => {
        if (e.target.matches(startBtn)) {
            timerClock = setInterval(() => {
                let timeClock = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${timeClock}</h3>`;
            }, 1000);
            e.target.disabled = true;
            e.target.classList.add('btn-disabled');
        }

        if (e.target.matches(stopBtn)) {
            clearInterval(timerClock);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(startBtn).disabled = false;
            d.querySelector(startBtn).classList.remove('btn-disabled');
        }
    });
}

export function alarm(sound, playBtn, stopBtn) {
    let alarmTimer;
    const $alarm = d.createElement('audio');
    $alarm.src = sound;

    d.addEventListener('click', (e) => {
        if (e.target.matches(playBtn)) {
            alarmTimer = setTimeout(() => {
                $alarm.play();
            }, 1000);
            e.disabled = true;
        }

        if (e.target.matches(stopBtn)) {
            clearTimeout(alarmTimer);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(playBtn).disabled = false;
        }
    })
}