const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const sec = document.querySelector(`.time span[data-list='second']`);
const min = document.querySelector(`.time span[data-list='minute']`);
const hour = document.querySelector(`.time span[data-list='hour']`);

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsToDeg = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsToDeg}deg)`;
    if (seconds === 0) {
     secondHand.style.transition = 'none';
    } else if (seconds === 1) {
     secondHand.style.transition = '';
    }

    const minutes = now.getMinutes();
    const minutesToDeg = ((minutes +  seconds / 60) / 60 * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesToDeg}deg)`;

    const hours = now.getHours();
    const hourToDeg = ((hours % 12 + minutes / 60) / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hourToDeg}deg)`;

    const format = n => String(n).padStart(2, '0');
    sec.textContent = format(seconds);
    min.textContent = `${format(minutes)}:`;
    hour.textContent = `${format(hours)}:`;
}
setDate();
setInterval(setDate, 1000);
