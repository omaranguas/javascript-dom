export default function countdown(label, date, title, message) {
    const d = document;
    const limit = new Date(date).getTime();
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timer = setInterval(() => {
        let now = new Date().getTime();
        let duration = limit - now;
        let daysLeft = Math.floor(duration / days);
        let hoursLeft = Math.floor((duration % days) / hours);
        let minutesLeft = Math.floor((duration % hours) / minutes);
        let secondsLeft = Math.floor((duration % minutes) / seconds);

        d.querySelector(label).innerHTML = `<h2>${title} en: </h2> <div>${daysLeft} días ${hoursLeft} horas ${minutesLeft} minutos ${secondsLeft} segundos </div>`;

        if (duration <= 0) {
            clearInterval(timer);
            d.querySelector('.message').innerHTML = message;
            d.querySelector(label).innerHTML = null;
        }
    }, 1000);
}