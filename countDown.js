const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const bithdayDate = '30 May 2021';

function countdown() {
    const birthDate = new Date(bithdayDate);
    const currentDate = new Date();
    const reslt = (birthDate - currentDate) / 1000;

    const days = Math.floor(reslt / 3600 / 24);
    const hours = Math.floor(reslt / 3600) % 24;
    const minutes = Math.floor(reslt / 60) % 60;
    const seconds = Math.floor(reslt) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000)
